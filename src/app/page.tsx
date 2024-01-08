import {  BadgePercent, BarChartBig, ChevronDown, ClipboardList, CreditCard, HomeIcon, LayoutGrid, MousePointer2, Palette, Truck, Users, Volume2, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid grid-cols-6 bg-white'>
      <div className='bg-[#353C53] h-100 px-2.5 py-4'>
          {/* Logo and Name */}
          <div className='flex gap-3'>
            <div>
              <Image src='/logo.png' alt='Nishyan' className='rounded-md' width={43} height={43}/>
            </div>
            <div className='flex flex-col gap-1 justify-start items-start w-2/3'>
              <p className='text-[15px]'>
                Nishyan</p>
              <p className='text-[13px] underline underline-offset-2'>Visit Store</p>
            </div>
            <div>
              <ChevronDown className='h-5 w-5 font-bold'/>
            </div>
          </div>

          {/* Navigation List */}
          <div className='mt-6 gap-1'>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <HomeIcon className='w-5 h-5'/>
                <p className='text-[14px]'>Home</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <ClipboardList className='w-5 h-5'/>
                <p className='text-[14px]'>Order</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <LayoutGrid className='w-5 h-5'/>
                <p className='text-[14px]'>Products</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Truck className='w-5 h-5'/>
                <p className='text-[14px]'>Delivery</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Volume2 className='w-5 h-5'/>
                <p className='text-[14px]'>Marketing</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <BarChartBig className='w-5 h-5'/>
                <p className='text-[14px]'>Analytics</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <CreditCard className='w-5 h-5'/>
                <p className='text-[14px]'>Payments</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <MousePointer2 className='w-5 h-5'/>
                <p className='text-[14px]'>Tools</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <BadgePercent className='w-5 h-5'/>
                <p className='text-[14px]'>Discounts</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Users className='w-5 h-5'/>
                <p className='text-[14px]'>Audience</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Palette className='w-5 h-5'/>
                <p className='text-[14px]'>Appearance</p>
              </div>
              <div className='flex gap-2 px-2 py-4 rounded-md hover:bg-[#4d587b]'>
                <Zap className='w-5 h-5'/>
                <p className='text-[14px]'>Plugins</p>
              </div>
              
          </div>
      </div>

      {/* Dashboard Navbar*/}
    </div>
  )
}
