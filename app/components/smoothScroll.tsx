"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isAnimating = false;

        const smoothScroll = () => {
            const diff = targetScroll - currentScroll;
            
            if (Math.abs(diff) > 0.01) {
                currentScroll += diff * 0.02;
                window.scrollTo(0, currentScroll);
                animationFrameId = requestAnimationFrame(smoothScroll);
            } else {
                isAnimating = false;
            }
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            
            if (isAnimating) {
                e.stopPropagation();
                return;
            }

            const scrollAmount = e.deltaY * 2;
            targetScroll += scrollAmount;
            
            isAnimating = true;
            animationFrameId = requestAnimationFrame(smoothScroll);
        };

        const preventScroll = (e: WheelEvent) => {
            if (isAnimating) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('wheel', preventScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('wheel', preventScroll);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return null;
} 