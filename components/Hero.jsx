"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const Hero = () => {

    // titling
    const imgRef = useRef();
    useEffect(() => {
        const imageElement = imgRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition > scrollThreshold){
                imageElement.classList.add('scrolled');
            }
            else{
                imageElement.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <div className='pb-20 px-4'>
        <div className='container mx-auto text-center'>
            <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Manage your Finance <br /> with Intelligence </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                An AI-Powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
            </p>
            <div className='flex justify-center space-x-4'>
                <Link href='/dashboard'></Link>
                <Button size='lg' className='px-8'>Get started</Button>
                <Link href='/dashboard'></Link>
                <Button size='lg' variant='outline' className='px-8'>Get started</Button>
            </div>
            <div className='hero-image-wrapper'>
                <div ref={imgRef} className='hero-image'>
                    <Image src={'/image.png'} width={1280} height={720} alt='dashboard' priority className='rounded-lg shadow-2xl border mx-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

