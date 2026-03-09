"use client"

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    if (!progressBar) return;

    // Inicia a animação
    progressBar.style.width = "0%";
    progressBar.style.opacity = "1";
    
    // Anima até 70% rapidamente
    setTimeout(() => {
      progressBar.style.width = "70%";
    }, 100);

    // Completa quando a página carregar
    const handleComplete = () => {
      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.opacity = "0";
      }, 200);
    };

    // Simula o carregamento completo após um pequeno delay
    const timer = setTimeout(handleComplete, 500);

    return () => {
      clearTimeout(timer);
      if (progressBar) {
        progressBar.style.opacity = "0";
      }
    };
  }, [pathname, searchParams]);

  return (
    <div
      id="progress-bar"
      className="fixed top-0 left-0 h-1 bg-green-500 z-50 transition-all duration-300 ease-out"
      style={{ width: "0%", opacity: 0 }}
    />
  );
}
