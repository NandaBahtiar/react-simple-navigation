import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage.jsx";

const products = [
  { id: "p1", name: "Nexus Gaming Laptop", price: 22450000 },
  { id: "p2", name: "Vortex RGB Keyboard", price: 1350000 },
  { id: "p3", name: "Aura Ultrawide Monitor", price: 7800000 },
  { id: "p4", name: "Quantum Pro Mouse", price: 950000 },
  { id: "p5", name: "Strix Wireless Headset", price: 2100000 },
  { id: "p6", name: "Cyber 4K Webcam", price: 1500000 },
  { id: "p7", name: "Raptor High-Performance CPU", price: 6500000 },
  { id: "p8", name: "Phantom Gaming GPU", price: 18750000 },
  { id: "p9", name: "Nova Pro RAM", price: 1800000 },
  { id: "p10", name: "Zenith Portable SSD", price: 2200000 },
  { id: "p11", name: "Nexus Ergonomic Motherboard", price: 3450000 },
  { id: "p12", name: "Vortex Silent Cooling Fan", price: 600000 },
  { id: "p13", name: "Aura Compact Power Supply", price: 1100000 },
  { id: "p14", name: "Quantum RGB PC Case", price: 1300000 },
  { id: "p15", name: "Strix Gaming Mousepad", price: 450000 },
  { id: "p16", name: "Cyber Smart Speaker", price: 850000 },
  { id: "p17", name: "Raptor Mechanical Keyboard", price: 1750000 },
  { id: "p18", name: "Phantom Lite Monitor", price: 2900000 },
  { id: "p19", name: "Nova Wireless Mouse", price: 750000 },
  { id: "p20", name: "Zenith Gaming Headset", price: 2500000 },
  { id: "p21", name: "Nexus 4K Laptop", price: 28000000 },
  { id: "p22", name: "Vortex Pro Keyboard", price: 1900000 },
  { id: "p23", name: "Aura Gaming Monitor", price: 5500000 },
  { id: "p24", name: "Quantum Ergonomic Mouse", price: 1150000 },
  { id: "p25", name: "Strix High-Performance Headset", price: 3200000 },
  { id: "p26", name: "Cyber Portable Webcam", price: 900000 },
  { id: "p27", name: "Raptor Gaming CPU", price: 8200000 },
  { id: "p28", name: "Phantom Pro GPU", price: 25000000 },
  { id: "p29", name: "Nova Gaming RAM", price: 2100000 },
  { id: "p30", name: "Zenith High-Performance SSD", price: 3000000 },
  { id: "p31", name: "Nexus Smart Motherboard", price: 4100000 },
  { id: "p32", name: "Vortex RGB Cooling Fan", price: 750000 },
  { id: "p33", name: "Aura High-Performance Power Supply", price: 1800000 },
  { id: "p34", name: "Quantum Gaming PC Case", price: 1650000 },
  { id: "p35", name: "Strix RGB Mousepad", price: 550000 },
  { id: "p36", name: "Cyber Wireless Speaker", price: 1250000 },
  { id: "p37", name: "Raptor Ultrawide Laptop", price: 26500000 },
  { id: "p38", name: "Phantom Silent Keyboard", price: 1100000 },
  { id: "p39", name: "Nova 4K Monitor", price: 6800000 },
  { id: "p40", name: "Zenith Lite Mouse", price: 600000 },
  { id: "p41", name: "Nexus Pro Headset", price: 2800000 },
  { id: "p42", name: "Vortex Smart Webcam", price: 1700000 },
  { id: "p43", name: "Aura Lite CPU", price: 4200000 },
  { id: "p44", name: "Quantum Lite GPU", price: 12500000 },
  { id: "p45", name: "Strix Portable RAM", price: 1500000 },
  { id: "p46", name: "Cyber Gaming SSD", price: 2500000 },
  { id: "p47", name: "Raptor Pro Motherboard", price: 4800000 },
  { id: "p48", name: "Phantom Pro Cooling Fan", price: 950000 },
  { id: "p49", name: "Nova Gaming Power Supply", price: 2200000 },
  { id: "p50", name: "Zenith Ultrawide PC Case", price: 1950000 },
  { id: "p51", name: "Nexus Ergonomic Mousepad", price: 400000 },
  { id: "p52", name: "Vortex High-Performance Speaker", price: 1900000 },
  { id: "p53", name: "Aura Mechanical Laptop", price: 19850000 },
  { id: "p54", name: "Quantum Wireless Keyboard", price: 1600000 },
  { id: "p55", name: "Strix Ultrawide Monitor", price: 8900000 },
  { id: "p56", name: "Cyber Gaming Mouse", price: 1300000 },
  { id: "p57", name: "Raptor RGB Headset", price: 2350000 },
  { id: "p58", name: "Phantom Pro Webcam", price: 2000000 },
  { id: "p59", name: "Nova High-Performance CPU", price: 9000000 },
  { id: "p60", name: "Zenith RGB GPU", price: 21500000 },
  { id: "p61", name: "Nexus Silent RAM", price: 1700000 },
  { id: "p62", name: "Vortex Gaming SSD", price: 2800000 },
  { id: "p63", name: "Aura Portable Motherboard", price: 2900000 },
  { id: "p64", name: "Quantum High-Performance Cooling Fan", price: 1150000 },
  { id: "p65", name: "Strix Lite Power Supply", price: 900000 },
  { id: "p66", name: "Cyber Pro PC Case", price: 1850000 },
  { id: "p67", name: "Raptor Lite Mousepad", price: 300000 },
  { id: "p68", name: "Phantom Portable Speaker", price: 1000000 },
  { id: "p69", name: "Nova Ergonomic Laptop", price: 21500000 },
  { id: "p70", name: "Zenith Compact Keyboard", price: 950000 },
  { id: "p71", name: "Nexus Gaming Monitor", price: 6200000 },
  { id: "p72", name: "Vortex Lite Mouse", price: 550000 },
  { id: "p73", name: "Aura Silent Headset", price: 1950000 },
  { id: "p74", name: "Quantum Gaming Webcam", price: 1800000 },
  { id: "p75", name: "Strix Smart CPU", price: 7100000 },
  { id: "p76", name: "Cyber Ultrawide GPU", price: 23000000 },
  { id: "p77", name: "Raptor Compact RAM", price: 1300000 },
  { id: "p78", name: "Phantom Smart SSD", price: 2000000 },
  { id: "p79", name: "Nova High-Performance Motherboard", price: 5200000 },
  { id: "p80", name: "Zenith Gaming Cooling Fan", price: 850000 },
  { id: "p81", name: "Nexus Pro Power Supply", price: 2500000 },
  { id: "p82", name: "Vortex Smart PC Case", price: 2100000 },
  { id: "p83", name: "Aura High-Performance Mousepad", price: 650000 },
  { id: "p84", name: "Quantum Pro Speaker", price: 2400000 },
  { id: "p85", name: "Strix 4K Laptop", price: 29500000 },
  { id: "p86", name: "Cyber Mechanical Keyboard", price: 1450000 },
  { id: "p87", name: "Raptor Pro Monitor", price: 7500000 },
  { id: "p88", name: "Phantom RGB Mouse", price: 1050000 },
  { id: "p89", name: "Nova Gaming Headset", price: 2650000 },
  { id: "p90", name: "Zenith High-Performance Webcam", price: 2200000 },
  { id: "p91", name: "Nexus Gaming CPU", price: 9500000 },
  { id: "p92", name: "Vortex 4K GPU", price: 27000000 },
  { id: "p93", name: "Aura Ergonomic RAM", price: 1900000 },
  { id: "p94", name: "Quantum Gaming SSD", price: 3200000 },
  { id: "p95", name: "Strix Gaming Motherboard", price: 5800000 },
  { id: "p96", name: "Cyber Compact Cooling Fan", price: 500000 },
  { id: "p97", name: "Raptor Smart Power Supply", price: 1500000 },
  { id: "p98", name: "Phantom High-Performance PC Case", price: 2300000 },
  { id: "p99", name: "Nova Pro Mousepad", price: 700000 },
  { id: "p100", name: "Zenith 4K Speaker", price: 2800000 },
];

const Product = () => {
  const navigate = useNavigate();

  const handleClick = (productID) => {
    navigate(`/products/${productID}`);
  };

  return (
    <AnimatedPage>
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product.id)}
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Product;
