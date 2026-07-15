"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { FaCheck, FaTimes, FaClock, } from "react-icons/fa";
//FaRefresh
import { IoMdRefresh } from "react-icons/io";

export default function AdminDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterBranch, setFilterBranch] = useState("all");

  // 1. Supabase එකෙන් Orders Data ටික Fetch කිරීම
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false }); // අලුත්ම orders උඩට එන ලෙස

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      alert("Failed to load orders!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 2. Order Status එක (Pending/Completed/Cancelled) Update කිරීමේ Function එක
  const updateStatus = async (orderId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", orderId);

      if (error) throw error;

      // Local state එක update කිරීම (Page එක refresh නොවී UI එක වෙනස් වෙන්න)
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
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

  // Unique branches ලැයිස්තුවක් filter dropdown එක සඳහා සකසා ගැනීම
  const uniqueBranches = Array.from(new Set(orders.map((o) => o.dojo_branch)));

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-black text-zinc-950 uppercase tracking-tight italic">
              Dojo Admin <span className="text-red-600">Dashboard</span>
            </h1>
            <p className="text-sm text-gray-500 font-medium mt-1">Manage official store orders and status updates.</p>
          </div>
          <button
            onClick={fetchOrders}
            className="flex items-center gap-2 bg-zinc-950 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-black transition-colors shrink-0 self-start sm:self-center"
          >
            <IoMdRefresh className={loading ? "animate-spin" : ""} /> Refresh Data
          </button>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Status Filter</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-semibold outline-none focus:border-zinc-900"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Branch Filter</label>
            <select
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-semibold outline-none focus:border-zinc-900"
            >
              <option value="all">All Dojos</option>
              {uniqueBranches.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Orders Table Area */}
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-bold">Loading orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="bg-white text-center py-20 rounded-2xl border border-gray-100 text-gray-400 font-medium">
            No orders found matching the criteria.
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                      {/* Player Info */}
                      <td className="p-4">
                        <div className="font-bold text-gray-900">{order.player_name}</div>
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

                      {/* Cart Items Summary */}
                      <td className="p-4">
                        <div className="space-y-1 max-w-xs">
                          {Array.isArray(order.items) &&
                            order.items.map((item: any, i: number) => (
                              <div key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-zinc-800 flex justify-between">
                                <span className="truncate max-w-[180px]">
                                  {item.name} {item.size !== "N/A" ? `(${item.size})` : ""}
                                </span>
                                <span className="font-bold shrink-0">x{item.qty}</span>
                              </div>
                            ))}
                        </div>
                      </td>

                      {/* Total Amount */}
                      <td className="p-4 font-bold text-gray-900">
                        Rs. {Number(order.total_amount).toLocaleString()}
                      </td>

                      {/* Status Badge */}
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

                      {/* Action Buttons */}
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
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
        )}
      </div>
    </div>
  );
}