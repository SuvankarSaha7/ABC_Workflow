import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [divisions, setDivisions] = useState([]);

  const fetchDivisions = async () => {
    try {
      const res = await fetch("https://mission-happay.vercel.app/divisions");
      const data = await res.json();
      setDivisions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-700 drop-shadow-md">
        Division Dashboard
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisions.map((div) => (
          <Card key={div.id} className="shadow-lg rounded-2xl hover:scale-[1.02] transition-all cursor-pointer border border-purple-200">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold text-purple-700">{div.name}</h2>
              <p className="text-sm text-gray-500 mt-2">Division ID: {div.id}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          onClick={fetchDivisions}
          className="px-6 py-3 rounded-xl text-lg shadow-md hover:scale-105 transition-all"
        >
          Refresh
        </Button>
      </div>
    </div>
  );
}
