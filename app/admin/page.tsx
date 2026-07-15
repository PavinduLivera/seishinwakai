"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { FaCheck, FaTimes, FaClock, FaLock, FaSignOutAlt, FaEye } from "react-icons/fa";
import { IoMdRefresh, IoMdClose } from "react-icons/io";

export default function AdminDashboard() {
  // Authentication States
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Orders States
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterBranch, setFilterBranch] = useState("all");

  // Selected Order for Modal View
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // 1. User දැනටමත් ලොග් වෙලා ඉන්නවාදැයි පරීක්ෂා කිරීම
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        fetchOrders();
      }
      setAuthLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchOrders();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Login Function එක
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      setUser(data.user);
    } catch (error: any) {
      console.error("Login failed:", error.message);
      setLoginError("Invalid email or password. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // 3. Logout Function එක
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setOrders([]);
    setSelectedOrder(null);
  };

  // 4. Supabase එකෙන් Orders Fetch කිරීම
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // 5. Order Status Update කිරීම
  const updateStatus = async (orderId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", orderId);

      if (error) throw error;

      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );

      // Modal එක open වෙලා තියෙන වෙලාවක status එක වෙනස් කරොත්, modal එක ඇතුලෙත් ඒක update කරන්න
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder((prev: any) => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status!");
    }
  };

  // Filters Apply කිරීම
  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    const matchesBranch = filterBranch === "all" || order.dojo_branch === filterBranch;
    return matchesStatus && matchesBranch;
  });

  const uniqueBranches = Array.from(new Set(orders.map((o) => o.dojo_branch)));

  // Loading Screen
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center font-bold text-gray-500">
        Checking Authentication...
      </div>
    );
  }

  // --- LOGIN SCREEN ---
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-red-50 text-red-600 h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4 border border-red-100">
              <FaLock className="text-xl" />
            </div>
            <h1 className="text-2xl font-black text-zinc-950 uppercase tracking-tight italic">
              Admin <span className="text-red-600">Portal</span>
            </h1>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">
              Authorized Personnel Only
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                required
                type="email"
                placeholder="sensei@example.com"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {loginError && (
              <p className="text-red-600 text-xs font-bold text-center bg-red-50 py-2.5 rounded-lg border border-red-100">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-zinc-900 hover:bg-black text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl transition-colors shadow-lg disabled:opacity-60"
            >
              {isLoggingIn ? "Authenticating..." : "Login to Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-6 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight italic">
              Dojo Admin <span className="text-red-600">Dashboard</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
              Logged in as: <span className="font-bold text-zinc-950">{user.email}</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
            <button
              onClick={fetchOrders}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
            >
              <IoMdRefresh className={`text-lg ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="w-full sm:w-auto">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Status Filter</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-semibold outline-none focus:border-zinc-900"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="w-full sm:w-auto">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Branch Filter</label>
            <select
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-semibold outline-none focus:border-zinc-900"
            >
              <option value="all">All Dojos</option>
              {uniqueBranches.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Orders List & Table Area */}
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-bold">Loading orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="bg-white text-center py-20 rounded-2xl border border-gray-100 text-gray-400 font-medium">
            No orders found matching the criteria.
          </div>
        ) : (
          <>
            {/* 🖥️ DESKTOP VIEW */}
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                      <th className="p-4">Date & Player</th>
                      <th className="p-4">Dojo & Sensei</th>
                      <th className="p-4">Items Ordered</th>
                      <th className="p-4">Total</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-700">
                    {filteredOrders.map((order) => (
                      <tr 
                        key={order.id} 
                        className="hover:bg-gray-50/70 transition-colors cursor-pointer"
                        onClick={() => setSelectedOrder(order)}
                      >
                        {/* Player Info */}
                        <td className="p-4">
                          <div className="font-bold text-gray-900 hover:underline">{order.player_name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{order.contact_number}</div>
                          <div className="text-[10px] text-gray-400 mt-1">
                            {new Date(order.created_at).toLocaleString("en-US", { timeZone: "Asia/Colombo" })}
                          </div>
                        </td>

                        {/* Dojo Info */}
                        <td className="p-4">
                          <div className="text-gray-900">{order.dojo_branch}</div>
                          <div className="text-xs text-gray-500 mt-0.5">Sensei: {order.sensei_name}</div>
                        </td>

                        {/* Items Ordered */}
                        <td className="p-4">
                          <div className="space-y-1 max-w-xs">
                            {Array.isArray(order.items) &&
                              order.items.slice(0, 2).map((item: any, i: number) => (
                                <div key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-zinc-800 flex justify-between">
                                  <span className="truncate max-w-[150px]">
                                    {item.name} {item.size !== "N/A" ? `(${item.size})` : ""}
                                  </span>
                                  <span className="font-bold">x{item.qty}</span>
                                </div>
                              ))}
                            {order.items.length > 2 && (
                              <div className="text-[10px] text-gray-400 font-bold pl-2">
                                + {order.items.length - 2} more items
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Total Amount */}
                        <td className="p-4 font-bold text-gray-900">
                          Rs. {Number(order.total_amount).toLocaleString()}
                        </td>

                        {/* Status Badge - FIXED THE BUG HERE */}
                        <td className="p-4">
                          <span
                            className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                              order.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : order.status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="p-4" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              title="View Details"
                              className="p-2 bg-gray-100 text-gray-600 hover:bg-zinc-950 hover:text-white rounded-lg transition-all"
                            >
                              <FaEye className="text-xs" />
                            </button>
                            {order.status !== "completed" && (
                              <button
                                onClick={() => updateStatus(order.id, "completed")}
                                title="Mark as Completed"
                                className="p-2 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition-all"
                              >
                                <FaCheck className="text-xs" />
                              </button>
                            )}
                            {order.status !== "cancelled" && (
                              <button
                                onClick={() => updateStatus(order.id, "cancelled")}
                                title="Mark as Cancelled"
                                className="p-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-all"
                              >
                                <FaTimes className="text-xs" />
                              </button>
                            )}
                            {order.status !== "pending" && (
                              <button
                                onClick={() => updateStatus(order.id, "pending")}
                                title="Reset to Pending"
                                className="p-2 bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg transition-all"
                              >
                                <FaClock className="text-xs" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 📱 MOBILE VIEW */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {filteredOrders.map((order) => (
                <div 
                  key={order.id} 
                  onClick={() => setSelectedOrder(order)}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4 cursor-pointer active:scale-[0.99] transition-transform"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{order.player_name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{order.contact_number}</p>
                    </div>
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-full ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl space-y-1">
                    <p className="text-xs text-gray-600">Dojo: <span className="font-bold text-zinc-950">{order.dojo_branch}</span></p>
                    <p className="text-xs text-gray-600">Sensei: <span className="font-bold text-zinc-950">{order.sensei_name}</span></p>
                    <p className="text-xs text-gray-600">Items: <span className="font-bold text-zinc-950">{order.items.length} items</span></p>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Total Amount</p>
                      <p className="text-base font-black text-zinc-950">Rs. {Number(order.total_amount).toLocaleString()}</p>
                    </div>
                    
                    <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <FaEye /> View
                      </button>
                      
                      {order.status !== "completed" && (
                        <button
                          onClick={() => updateStatus(order.id, "completed")}
                          className="p-2 bg-green-50 text-green-600 rounded-lg"
                        >
                          <FaCheck className="text-xs" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ========================================== */}
      {/* 🔍 ORDER DETAILS MODAL (FULL DETAILS POPUP) */}
      {/* ========================================== */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-zinc-950 text-white p-5 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-black uppercase tracking-tight italic">Order <span className="text-red-500">Details</span></h2>
                <p className="text-[10px] text-gray-400 mt-0.5">ID: {selectedOrder.id}</p>
              </div>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm font-medium">
              
              {/* Status Section */}
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Current Status</span>
                  <span className={`text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${
                    selectedOrder.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : selectedOrder.status === "cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {selectedOrder.status}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block text-right mb-1">Date & Time</span>
                  <span className="text-xs text-zinc-800 font-bold">
                    {new Date(selectedOrder.created_at).toLocaleString("en-US", { timeZone: "Asia/Colombo" })}
                  </span>
                </div>
              </div>

              {/* Player & Dojo Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[10px] text-gray-400 font-bold uppercase mb-1">🥋 Player Details</h4>
                  <p className="font-bold text-gray-900">{selectedOrder.player_name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{selectedOrder.contact_number}</p>
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-bold uppercase mb-1">🏢 Dojo Details</h4>
                  <p className="font-bold text-gray-900">{selectedOrder.dojo_branch}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Sensei: {selectedOrder.sensei_name}</p>
                </div>
              </div>

              {/* Items Summary */}
              <div>
                <h4 className="text-[10px] text-gray-400 font-bold uppercase mb-2">🛒 Ordered Items</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {Array.isArray(selectedOrder.items) &&
                    selectedOrder.items.map((item: any, i: number) => (
                      <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-150">
                        <div>
                          <p className="font-bold text-gray-900 text-xs sm:text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">Size: <span className="font-bold text-zinc-950">{item.size}</span></p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-bold text-gray-900">x{item.qty}</p>
                          <p className="text-xs text-gray-500">Rs. {Number(item.price).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Grand Total */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-base font-black text-gray-900">Total Amount</span>
                <span className="text-xl font-black text-red-600">Rs. {Number(selectedOrder.total_amount).toLocaleString()}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex flex-wrap gap-2 justify-end">
              {selectedOrder.status !== "pending" && (
                <button
                  onClick={() => updateStatus(selectedOrder.id, "pending")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-amber-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-amber-600 transition-colors"
                >
                  <FaClock /> Mark Pending
                </button>
              )}
              {selectedOrder.status !== "cancelled" && (
                <button
                  onClick={() => updateStatus(selectedOrder.id, "cancelled")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-red-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-red-700 transition-colors"
                >
                  <FaTimes /> Cancel Order
                </button>
              )}
              {selectedOrder.status !== "completed" && (
                <button
                  onClick={() => updateStatus(selectedOrder.id, "completed")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-green-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-green-700 transition-colors"
                >
                  <FaCheck /> Complete Order
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}