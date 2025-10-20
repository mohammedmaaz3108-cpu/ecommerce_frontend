"use client";
import { useState } from "react";

export default function MainPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const navCards = [
    {
      id: 1,
      title: "platforms",
      description: "Manage your projects and analytics in one place.",
      path: "/platforms",
      icon: "📊",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 2,
      title: "Family",
      description: "Explore your family records and genealogy.",
      path: "/family",
      icon: "👨‍👩‍👧‍👦",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 3,
      title: "Settings",
      description: "Customize your experience and preferences.",
      path: "/settings",
      icon: "⚙️",
      gradient: "from-yellow-500 to-orange-600",
    },
    // Add more cards as needed
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center pt-12 pb-16 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Our Platform
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
            Your gateway to innovative solutions and family-friendly services
          </p>
        </header>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 animate-fade-in-up">
          {navCards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => handleNavigation(card.path)}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative bg-white/95 rounded-3xl p-8 cursor-pointer
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:scale-105
                shadow-2xl hover:shadow-3xl
                overflow-hidden
                ${hoveredCard === card.id ? "ring-4 ring-white/50" : ""}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Shimmer Effect */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                  ${hoveredCard === card.id ? "animate-shimmer" : "opacity-0"}
                `}
              />

              {/* Gradient Background */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${card.gradient}
                  transition-opacity duration-500
                  ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform transition-transform duration-500 hover:scale-110">
                  {card.icon}
                </div>
                <h2
                  className={`
                    text-3xl font-bold mb-4 transition-colors duration-300
                    ${hoveredCard === card.id ? "text-white" : "text-gray-800"}
                  `}
                >
                  {card.title}
                </h2>
                <p
                  className={`
                    text-lg leading-relaxed transition-colors duration-300
                    ${
                      hoveredCard === card.id
                        ? "text-white/95"
                        : "text-gray-600"
                    }
                  `}
                >
                  {card.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div
                className={`
                  absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                    card.gradient
                  }
                  opacity-20 rounded-bl-full transition-opacity duration-300
                  ${hoveredCard === card.id ? "opacity-40" : ""}
                `}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-12 text-white/90">
          <p className="text-lg mb-2">
            ©️ 2025 Digital Platform. All rights reserved.
          </p>
          <p className="text-sm opacity-80">
            Building better experiences together
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-shimmer {
          animation: shimmer 0.8s ease-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
