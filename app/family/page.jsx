"use client";
import { createFamily } from "@/lib/actions/(family)/create-family";
import { fetchFamily } from "@/lib/actions/(family)/fetch-family";
import React, { useEffect, useState } from "react";

const familyList = []; // Add this at the top inside your component

export default function familyPage() {
  const [family, setFamily] = useState([]);

  useEffect(() => {
    fetchFamily().then((data) => {
      setFamily(data);
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const newFamily = {
      ...formData,
    };
    try {
      const response = await createFamily(newFamily);
      setFamily((prev) => [...prev, newFamily]);
      setFormData({ name: "", father_name: "", age: "", gender: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Family Manager
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section: Table */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
              Family List
            </h2>

            {family.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No family members added yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Father
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">
                        Age
                      </th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">
                        Gender
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {familyList.map((member, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium text-gray-800">
                          {member.name}
                        </td>
                        <td className="py-4 px-4 text-gray-700">
                          {member.father_name}
                        </td>
                        <td className="py-4 px-4 text-center text-gray-700">
                          {member.age}
                        </td>
                        <td className="py-4 px-4 text-center text-gray-700">
                          {member.gender}
                        </td>
                        <td className="py-4 px-4 text-gray-600 text-sm">
                          {member.created_at}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Right Section: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>
              Add Family Member
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Alex"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Name
                </label>
                <input
                  type="text"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleChange}
                  placeholder="e.g., David"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g., 25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                Add Family Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
