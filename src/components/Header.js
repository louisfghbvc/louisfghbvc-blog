import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

export default function Header() {
    const { hasLogin } = useSelector((state) => state.account.login);
    const { name, photo } = useSelector((state) => state.account.user);
    const [isScrollDown, setIsScrollDown] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setIsScrollDown(true);
        } else {
            setIsScrollDown(false);
        }
    };

    return (
        <div
            className={`sticky top-0 z-50 w-screen h-20 text-xl flex flex-row items-center px-14 mb-14 transition ease-in ${
                isScrollDown ? 'bg-yellow-50 h-16' : 'bg-transparent border-b border-b-yellow-700/50'
            }`}
        ></div>