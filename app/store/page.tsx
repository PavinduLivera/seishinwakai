"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase"; 

// import Image from "next/image"; // Images දාද්දි මේක පාවිච්චි කරන්න
import { 
  FaShoppingCart, 
  FaPlus, 
  FaMinus, 
  FaTrash, 
  FaWhatsapp, 
  FaTimes,
  FaSearch,
  FaArrowLeft
} from "react-icons/fa";

// instructors.ts එකෙන් senseiDetails සහ dojos import කිරීම
import { senseiDetails, dojos } from "@/constants/instructors";

// --- Products Dummy Data ---
const products = [
  {
    id: 1,
    name: "Seishinwakai Karate Gi (Heavyweight)",
    price: 8500,
    category: "Uniforms",
    sizes: ["120cm", "130cm", "140cm", "150cm", "160cm", "170cm", "180cm"],
    image: "/store/gi.jpg",
  },
  {
    id: 2,
    name: "WKF Approved Kumite Gloves (Red)",
    price: 4200,
    category: "Protection",
    sizes: ["S", "M", "L", "XL"],
    image: "/store/gloves-red.jpg",
  },
  {
    id: 3,
    name: "WKF Approved Kumite Gloves (Blue)",
    price: 4200,
    category: "Protection",
    sizes: ["S", "M", "L", "XL"],
    image: "/store/gloves-blue.jpg",
  },
  {
    id: 4,
    name: "Shin & Instep Guards",
    price: 6500,
    category: "Protection",
    sizes: ["S", "M", "L"],
    image: "/store/shin-guards.jpg",
  },
  {
    id: 5,
    name: "Official Dojo T-Shirt (Black)",
    price: 2500,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/store/tshirt.jpg",
  },
  {
    id: 6,
    name: "Karate Sports Bag",
    price: 5500,
    category: "Accessories",
    sizes: [], // Size නැති item එකක්
    image: "/store/bag.jpg",
  },
];

export default function StorePage() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Size තෝරපුවා තියාගන්නා state එක
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  
  // Validation Errors තියාගන්නා state එක (Size තෝරලා නැති ඒවට)
  const [sizeErrors, setSizeErrors] = useState<Record<number, boolean>>({});
  
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form">("cart");
  const [isSubmitting, setIsSubmitting] = useState(false); // Database එකට save වෙනකම් loading බලාගන්න state එකක්
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    dojo: "",
    sensei: "",
  });

  // --- dynamic instructors list & dojos list ---
  const instructorsList = Object.values(senseiDetails || {}).map((s: any) => s.name);
  const dojosList = Object.values(dojos || {}).map((d: any) => d.name);

  // Search Filter
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Size එකක් select කරද්දි error එක clear කරනවා
  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
    setSizeErrors(prev => ({ ...prev, [productId]: false }));
  };

  // Add to Cart Function with Strict Validation
  const addToCart = (product: any) => {
    const hasSizes = product.sizes && product.sizes.length > 0;
    const chosenSize = selectedSizes[product.id];

    if (hasSizes && !chosenSize) {
      setSizeErrors(prev => ({ ...prev, [product.id]: true }));
      return;
    }

    const finalSize = hasSizes ? chosenSize : "N/A";

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.size === finalSize);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === finalSize 
            ? { ...item, qty: item.qty + 1 } 
            : item
        );
      }
      return [...prev, { ...product, size: finalSize, qty: 1, cartId: Date.now() + Math.random() }];
    });
    
    setIsCartOpen(true);
    setCheckoutStep("cart");
  };

  const updateQty = (cartId: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (cartId: number) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Database & WhatsApp Checkout
  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Supabase Database එකට Data ඇතුළත් කිරීම
      const { error } = await supabase
        .from("orders")
        .insert([
          {
            player_name: formData.name,
            contact_number: formData.contact,
            dojo_branch: formData.dojo,
            sensei_name: formData.sensei,
            items: cart, // Cart Array එක කෙලින්ම jsonb ලෙස save වේ
            total_amount: cartTotal,
            status: "pending",
          }
        ]);

      if (error) throw error;

      // 2. Database එකේ සාර්ථකව save වුණොත් පමණක් WhatsApp එකට දත්ත යැවීම
      const phoneNumber = "94774488092"; // Dojo WhatsApp Number
      
      let message = "I would like to place a new order:%0a%0a";
      
      message += `*🥋 Player Details:*%0a`;
      message += `Name: ${formData.name}%0a`;
      message += `Contact: ${formData.contact}%0a`;
      message += `Dojo: ${formData.dojo}%0a`;
      message += `Sensei: ${formData.sensei}%0a%0a`;

      message += `*🛒 Order Summary:*%0a`;
      cart.forEach((item, index) => {
        const sizeText = item.size !== "N/A" ? ` (Size: ${item.size})` : "";
        message += `${index + 1}. ${item.name}${sizeText} - ${item.qty} x Rs.${item.price.toLocaleString()}%0a`;
      });
      
      message += `%0a*Total Amount: Rs. ${cartTotal.toLocaleString()}*%0a%0aPlease confirm my order.`;

      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

      // Cart එක Clear කර Drawer එක Close කිරීම
      setCart([]);
      setIsCartOpen(false);
      setFormData({ name: "", contact: "", dojo: "", sensei: "" });

    } catch (error) {
      console.error("Error saving order to database:", error);
      alert("Something went wrong while saving your order. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-24">
      {/* Header & Search */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h4 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
              Official Gear
            </h4>
            <h1 className="text-4xl md:text-5xl font-black text-black uppercase italic tracking-tighter">
              Dojo <span className="text-green-600">Store</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition-all text-sm font-medium"
              />
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => { setIsCartOpen(true); setCheckoutStep("cart"); }}
              className="relative bg-zinc-900 text-white p-4 rounded-full shadow-xl hover:bg-red-600 transition-all active:scale-95 shrink-0"
            >
              <FaShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <FaSearch className="text-4xl mx-auto mb-4 opacity-50" />
            <p className="font-bold">No products found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const hasError = sizeErrors[product.id];
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  {/* Image Box */}
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <span className="text-xs font-bold uppercase tracking-widest">{product.category}</span>
                    </div>
                  </div>

                  {/* Details Box */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-red-600 font-black text-lg mb-4">
                        Rs. {product.price.toLocaleString()}
                      </p>
                    </div>
                    
                    <div>
                      {/* Size Selector */}
                      {product.sizes && product.sizes.length > 0 && (
                        <div className="mb-4">
                          <select 
                            className={`w-full p-2.5 border rounded-lg text-sm text-gray-700 outline-none transition-all cursor-pointer ${
                              hasError 
                                ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-100 ring-2 ring-red-200" 
                                : "border-gray-200 focus:border-zinc-900"
                            }`}
                            value={selectedSizes[product.id] || ""}
                            onChange={(e) => handleSizeChange(product.id, e.target.value)}
                          >
                            <option value="" disabled>Select Size</option>
                            {product.sizes.map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {hasError && (
                            <p className="text-red-600 text-[10px] font-bold mt-1.5 animate-pulse">
                              * Please select a size first!
                            </p>
                          )}
                        </div>
                      )}

                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-zinc-900 text-white hover:bg-black font-black text-xs uppercase tracking-wider py-3 rounded-xl transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Overlay & Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsCartOpen(false)}
          ></div>

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-10">
              <div className="flex items-center gap-3">
                {checkoutStep === "form" && (
                  <button 
                    onClick={() => setCheckoutStep("cart")}
                    disabled={isSubmitting}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50"
                  >
                    <FaArrowLeft className="text-sm" />
                  </button>
                )}
                <h2 className="text-xl font-black uppercase italic tracking-tight">
                  {checkoutStep === "cart" ? "Your Cart" : "Player Details"}
                </h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                disabled={isSubmitting}
                className="p-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors disabled:opacity-50"
              >
                <FaTimes />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {checkoutStep === "cart" ? (
                // --- CART VIEW ---
                <div className="p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-40 flex flex-col items-center justify-center text-gray-400 space-y-4">
                      <FaShoppingCart className="text-6xl text-gray-200" />
                      <p className="font-medium text-sm">Your cart is empty.</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.cartId} className="flex gap-4 items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-gray-900 line-clamp-2">{item.name}</h4>
                          {item.size !== "N/A" && (
                            <span className="text-[10px] bg-zinc-200 text-zinc-800 px-2 py-0.5 rounded font-bold uppercase mt-1 inline-block">
                              Size: {item.size}
                            </span>
                          )}
                          <p className="text-red-600 font-bold text-sm mt-1">Rs. {item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg border border-gray-200 shadow-sm">
                          <button onClick={() => updateQty(item.cartId, -1)} className="text-gray-500 hover:text-red-600">
                            <FaMinus className="text-[10px]" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.cartId, 1)} className="text-gray-500 hover:text-green-600">
                            <FaPlus className="text-[10px]" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.cartId)} className="text-gray-400 hover:text-red-600 p-2">
                          <FaTrash className="text-sm" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                // --- CHECKOUT FORM VIEW ---
                <div className="p-6">
                  <form id="checkout-form" onSubmit={submitOrder} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Player Name</label>
                      <input 
                        required 
                        type="text" 
                        disabled={isSubmitting}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm font-medium disabled:opacity-60"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact Number</label>
                      <input 
                        required 
                        type="tel" 
                        disabled={isSubmitting}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm font-medium disabled:opacity-60"
                        value={formData.contact}
                        onChange={e => setFormData({...formData, contact: e.target.value})}
                        placeholder="e.g. 077 123 4567"
                      />
                    </div>
                    
                    {/* Dojo Dropdown (Dynamic) */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Select Dojo</label>
                      <select 
                        required
                        disabled={isSubmitting}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm font-medium cursor-pointer disabled:opacity-60"
                        value={formData.dojo}
                        onChange={e => setFormData({...formData, dojo: e.target.value})}
                      >
                        <option value="" disabled>Select your branch</option>
                        {dojosList.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    {/* Instructor / Sensei Dropdown (Dynamic) */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Instructor (Sensei)</label>
                      <select 
                        required
                        disabled={isSubmitting}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm font-medium cursor-pointer disabled:opacity-60"
                        value={formData.sensei}
                        onChange={e => setFormData({...formData, sensei: e.target.value})}
                      >
                        <option value="" disabled>Select your sensei</option>
                        {instructorsList.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Footer Area */}
            {cart.length > 0 && (
              <div className="p-6 bg-gray-50 border-t border-gray-100 z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-gray-500 uppercase">Subtotal</span>
                  <span className="text-2xl font-black text-gray-900">
                    Rs. {cartTotal.toLocaleString()}
                  </span>
                </div>
                
                {checkoutStep === "cart" ? (
                  <button
                    onClick={() => setCheckoutStep("form")}
                    className="w-full bg-zinc-900 hover:bg-black text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl transition-colors shadow-lg"
                  >
                    Proceed to Details
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className={`w-full text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg ${
                      isSubmitting 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-green-500 hover:bg-green-600 shadow-green-200"
                    }`}
                  >
                    <FaWhatsapp className="text-xl" />
                    {isSubmitting ? "Processing Order..." : "Place Order via WhatsApp"}
                  </button>
                )}
                <p className="text-center text-[10px] text-gray-400 font-medium mt-3">
                  Payment will be collected at the Dojo.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}