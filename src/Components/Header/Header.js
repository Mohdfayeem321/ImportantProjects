import logo from '../../Images/logo.png';
import search from '../../Images/search.svg';
import Hot from '../../Images/Hot.svg';
import Timer from '../../Images/Timer.svg';
import trophy from '../../Images/trophy.svg';
import drop from '../../Images/Drop.svg';
import amazon from '../../Images/image 12.png';
import food from '../../Images/food.png';
import gaming from '../../Images/gaming.png';
import hosting from '../../Images/hosting.png';
import fashion from '../../Images/fashion.png';
import mobile from '../../Images/mobile.png';
import movies from '../../Images/movies.png';
import toys from '../../Images/toys.png';
import travel from '../../Images/travel.png';
import beauty from '../../Images/beauty.png';
import image10 from '../../Images/image10.png';
import newSeason from '../../Images/newSeason.png';
import timeTravel from '../../Images/timeTravel.png';
import specialMenu from '../../Images/specialMenu.png';
import postman from '../../Images/postman.png';
import union from '../../Images/Union.svg';
import union2 from '../../Images/Union2.svg';
import Coupon2 from '../../Images/Coupon.svg';
import Login from '../../Images/Login.svg';
import Card from '../../Images/Card.svg';
import appleicon from '../../Images/appleicon.png';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Carousel } from "@material-tailwind/react";
import './Header.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <>
            {/* Nav Bar Start Here */}

            <div className="bg-[#FFFFFF] w-full flex justify-center items-center h-[7.87rem] flex-wrap">
                <div className='w-[35rem] pt-1 pb-1 md:w-[53.75rem] md:h-[5.125rem] md:pt-4 md:pb-4 flex md:justify-between justify-evenly items-center md:flex flex-wrap'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex items-center bg-[#EEE] divide-x rounded-[0.5rem] pl-4">
                        <img className="w-3 h-3 border-l-1" src={search} alt="" />
                        <input className="bg-[#EEE] md:ml-2 md:border-inherit md:border-l-0 items-center w-[18rem] h-[1.5rem] md:h-[2rem] md:w-[26.125rem] md:font-metropolis md:leading-normal md:text-xs md:font-normal border md:rounded-lg pl-3 md:pr-2" type="text" placeholder=" Search For brand, category, coupon" />
                    </div>
                    <div className='bg-[#F01C21] w-[9rem] px-1 py-1 text-xs rounded text-[#FFF] items-center md:px-[1rem] md:py-[0.75rem] md:font-normal'>
                        <button>LOGIN/SIGN UP</button>
                    </div>
                </div>
            </div>

            {/* Nav Bar Ends Here */}
            {/* Menu Start Here */}

            <div className="w-full bg-[#091431] md:h-[2.67rem] text-xs text-[#FFF] md:flex md:items-center flex justify-evenly md:justify-center">
                <ul className='md:flex flex items-center gap-1 flex-wrap'>
                    <li className='p-4 cursor-pointer text-[#F01C21]'>Home</li>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full  justify-center gap-x-1.5 bg-[#091431] text-white px-3 py-2 text-sm font-semibo hover:bg-gray-50 hover:text-black hover:rounded">
                                Deals
                                <img
                                    src={drop}  // Replace with the path to your image
                                    alt="Icon"
                                    className="-mr-1 h-5 w-5 text-gray-400"  // You can adjust the class or style as needed
                                    aria-hidden="true"
                                />

                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full  justify-center gap-x-1.5 bg-[#091431] text-white px-3 py-2 text-sm font-semibo hover:bg-gray-50 hover:text-black hover:rounded">
                                Coupon
                                <img
                                    src={drop}  // Replace with the path to your image
                                    alt="Icon"
                                    className="-mr-1 h-5 w-5 text-gray-400"  // You can adjust the class or style as needed
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full  justify-center gap-x-1.5 bg-[#091431] text-white px-3 py-2 text-sm font-semibo hover:bg-gray-50 hover:text-black hover:rounded">
                                Stores
                                <img
                                    src={drop}  // Replace with the path to your image
                                    alt="Icon"
                                    className="-mr-1 h-5 w-5 text-gray-400"  // You can adjust the class or style as needed
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <li className='p-4 cursor-pointer'>Contact us</li>
                </ul>
            </div >

            {/* Menu Ends Here */}

            {/* Images  */}
            <div className="bg-[#DADADA40] flex justify-center pt-[2.5rem] pb-[1rem]">
                <Carousel
                    className="rounded-xl md:rounded-md  md:h-[25.8125rem] md:w-[53.75rem] h-[13.5rem] w-[27rem]"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-[#091431]" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image1"
                        className=" md:h-[25.8125rem] md:w-[53.75rem] h-[13.5rem] w-[27rem] object-cover md:rounded-[2rem]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image2"
                        className=" md:h-[25.8125rem] md:w-[53.75rem] h-[13.5rem] w-[27rem] object-cover md:rounded-[2rem]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image3"
                        className=" md:h-[25.8125rem] md:w-[53.75rem] h-[13.5rem] w-[27rem] object-cover md:rounded-[2rem]"
                    />
                </Carousel>
            </div>
            {/* Tabs */}
            <div className="bg-[#DADADA40] w-full md:pt-[2.5rem] md:pb-[2.5rem] flex items-center justify-center">
                <ul className='md:flex md:gap-y-12 flex gap-y-4'>
                    <div className='bg-white rounded-lg md:p-3 p-2 flex items-center gap-1.5 text-sm text-[#F01C21] shadow-[#0000000a]'>
                        <img className="w-3 h-3 border-l-1" src={trophy} alt="" />
                        <li>Popular Coupons</li>
                    </div>
                    <div className='md:p-3 p-2 flex items-center gap-1.5 text-sm text-[#091431]'>
                        <img className="w-3 h-3 border-l-1" src={Timer} alt="" />
                        <li>Ending Soon</li>
                    </div>
                    <div className='md:p-3 p-2 flex items-center gap-1.5 text-sm text-[#091431]'>
                        <img className="w-3 h-3 border-l-1" src={Hot} alt="" />
                        <li>Latest Coupons</li>
                    </div>
                </ul>
            </div>
            {/* offers */}
            <div className="bg-[#DADADA40] w-full">
                <div className="grid md:grid-rows-2 grid-rows-4 grid-flow-col justify-center gap-5 md:pt-2 pt-3">
                    <div className="bg-[#FFF] flex flex-col px-[15px] pt-[16px] py-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FFF] flex flex-col pb-[15px] pt-[16px] pl-[22px] pr-[23px] rounded-lg h-[14.875rem] w-[12.5rem]">
                        <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                            <div className="text-[#3BA615] text-[14px] leading-5">
                                <h3>
                                    Upto 60% off on Appliances
                                </h3>
                            </div>
                            <div className="justify-self-center pt-5 pb-5">
                                <img src={amazon} alt="" />
                            </div>
                            <div className="text-[12px]">
                                <h3>
                                    Upto 60% off on summer Appliances
                                </h3>
                            </div>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-2">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* slide bar */}
            <div className='bg-[#DADADA40] flex justify-center py-10'>
                <div className='bg-[#091431] rounded h-[8px] w-[48px] mr-[6px]'></div>
                <div className='bg-white/50 rounded h-[8px] w-[20px] mr-[6px] ml-[6px]'></div>
                <div className='bg-white/50 rounded h-[8px] w-[20px] ml-[6px]'></div>
            </div>
            {/* Deals of the day */}
            <div className="bg-[#DADADA40] text-[24px]"><h3>Deals of the day</h3></div>
            <div className="bg-[#DADADA40] flex justify-center">
                <div className="bg-[#F01C21] h-[3px] w-[76px]">
                </div>
            </div>
            <div className="bg-[#DADADA40] flex flex-wrap justify-center gap-5 pt-[40px]">
                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                        <div className="justify-self-center pt-4 pb-4">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="mb-[5px] text-[14px] leading-5">
                            <h3>
                                Amazon
                            </h3>
                        </div>
                        <div className="text-[#3BA615] text-[12px]">
                            <h3>
                                Flat 30% off
                            </h3>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                        <div className="justify-self-center pt-4 pb-4">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="mb-[5px] text-[14px] leading-5">
                            <h3>
                                Amazon
                            </h3>
                        </div>
                        <div className="text-[#3BA615] text-[12px]">
                            <h3>
                                Flat 30% off
                            </h3>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                        <div className="justify-self-center pt-4 pb-4">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="mb-[5px] text-[14px] leading-5">
                            <h3>
                                Amazon
                            </h3>
                        </div>
                        <div className="text-[#3BA615] text-[12px]">
                            <h3>
                                Flat 30% off
                            </h3>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                        <div className="justify-self-center pt-4 pb-4">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="mb-[5px] text-[14px] leading-5">
                            <h3>
                                Amazon
                            </h3>
                        </div>
                        <div className="text-[#3BA615] text-[12px]">
                            <h3>
                                Flat 30% off
                            </h3>
                        </div>
                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                GRAB NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* slide bar */}
            <div className='bg-[#DADADA40] flex justify-center py-10'>
                <div className='bg-[#091431] rounded h-[8px] w-[48px] mr-[6px]'></div>
                <div className='bg-white/50 rounded h-[8px] w-[20px] mr-[6px] ml-[6px]'></div>
                <div className='bg-white/50 rounded h-[8px] w-[20px] ml-[6px]'></div>
            </div>
            {/* { Coupon By Categories} */}
            <div className="text-[24px] pt-10 bg-[#ECECEC]">
                <h3>Coupon By Categories</h3>
                <div className="flex justify-center">
                    <div className="bg-[#ECECEC] h-[3px] w-[76px]">
                        <div className="bg-[#F01C21] h-[3px] w-[76px]">
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center pt-10 gap-[4px]">
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={fashion} alt="" />
                        <h5 className='text-xs mt-2.5'>Fashion</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={food} alt="" />
                        <h5 className='text-xs  mt-2.5'>Food</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={beauty} alt="" />
                        <h5 className='text-xs  mt-2.5'>Beauty</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={toys} alt="" />
                        <h5 className='text-xs  mt-2.5'>Toys</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={hosting} alt="" />
                        <h5 className='text-xs  mt-2.5'>Cloud</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={gaming} alt="" />
                        <h5 className='text-xs  mt-2.5'>Games</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={mobile} alt="" />
                        <h5 className='text-xs  mt-2.5'>Phones</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={travel} alt="" />
                        <h5 className='text-xs  mt-2.5'>Travel</h5>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 flex flex-col items-center rounded-t-lg h-[90px] w-[92px]">
                        <img src={movies} alt="" />
                        <h5 className='text-xs  mt-2.5'>Movies</h5>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#FFF] grid md:grid-rows-1 grid-rows-2 grid-flow-col justify-center items-center gap-5 w-[53.75rem] pb-6">
                        <div className="bg-[#FFF] flex flex-col p-5 h-[10.625rem] w-[12.5rem]">
                            <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                <div className="justify-self-center pt-4 pb-4">
                                    <img src={amazon} alt="" />
                                </div>
                                <div className="mb-[5px] text-[14px] leading-5">
                                    <h3>
                                        Amazon
                                    </h3>
                                </div>
                                <div className="text-[#3BA615] text-[12px]">
                                    <h3>
                                        Flat 30% off
                                    </h3>
                                </div>
                                <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                    <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                        GRAB NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FFF] flex flex-col p-5 h-[10.625rem] w-[12.5rem]">
                            <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                <div className="justify-self-center pt-4 pb-4">
                                    <img src={amazon} alt="" />
                                </div>
                                <div className="mb-[5px] text-[14px] leading-5">
                                    <h3>
                                        Amazon
                                    </h3>
                                </div>
                                <div className="text-[#3BA615] text-[12px]">
                                    <h3>
                                        Flat 30% off
                                    </h3>
                                </div>
                                <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                    <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                        GRAB NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FFF] flex flex-col p-5 h-[10.625rem] w-[12.5rem]">
                            <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                <div className="justify-self-center pt-4 pb-4">
                                    <img src={amazon} alt="" />
                                </div>
                                <div className="mb-[5px] text-[14px] leading-5">
                                    <h3>
                                        Amazon
                                    </h3>
                                </div>
                                <div className="text-[#3BA615] text-[12px]">
                                    <h3>
                                        Flat 30% off
                                    </h3>
                                </div>
                                <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                    <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                        GRAB NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FFF] flex flex-col p-5 h-[10.625rem] w-[12.5rem]">
                            <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                <div className="justify-self-center pt-4 pb-4">
                                    <img src={amazon} alt="" />
                                </div>
                                <div className="mb-[5px] text-[14px] leading-5">
                                    <h3>
                                        Amazon
                                    </h3>
                                </div>
                                <div className="text-[#3BA615] text-[12px]">
                                    <h3>
                                        Flat 30% off
                                    </h3>
                                </div>
                                <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                    <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                        GRAB NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slide bar */}
                    <div className='bg-[#FFF] flex justify-center pt-4 pb-6 w-[53.75rem] rounded-b-lg'>
                        <div className='bg-[#091431] rounded h-[8px] w-[48px] mr-[6px]'></div>
                        <div className='bg-[#D9D9D9] rounded h-[8px] w-[20px] mr-[6px] ml-[6px]'></div>
                        <div className='bg-[#D9D9D9] rounded h-[8px] w-[20px] ml-[6px]'></div>
                    </div>
                    {/* offer image */}
                    <div className="bg-[#FFF] py-6 w-full flex flex-col justify-center items-center mt-10">
                        <div className="">
                            <img src={image10} alt="" />
                        </div>

                        {/* Popular Membership */}
                        <div className="bg-[#FFF] py-10">
                            <h5>Popular Membership</h5>
                            <div className="flex justify-center">
                                <div className="bg-[#ECECEC] h-[3px] w-[76px]">
                                    <div className="bg-[#F01C21] h-[3px] w-[76px]">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center items-center md:grid md:grid-rows-2 gap-1 md:grid-col-1 md:grid-flow-col md:justify-center md:items-center md:gap-5">
                            <div className="img1">
                                <img src={newSeason} alt="" />
                            </div>
                            <div className="img3">
                                <img src={specialMenu} alt="" />
                            </div>
                            <div className="w-[26.25rem] h-[26.25rem] grid md:grid-rows-2 grid-rows-2 grid-flow-col justify-center items-center">
                                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                        <div className="justify-self-center pt-4 pb-4">
                                            <img src={amazon} alt="" />
                                        </div>
                                        <div className="mb-[5px] text-[14px] leading-5">
                                            <h3>
                                                Amazon
                                            </h3>
                                        </div>
                                        <div className="text-[#3BA615] text-[12px]">
                                            <h3>
                                                Flat 30% off
                                            </h3>
                                        </div>
                                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                                GRAB NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                        <div className="justify-self-center pt-4 pb-4">
                                            <img src={amazon} alt="" />
                                        </div>
                                        <div className="mb-[5px] text-[14px] leading-5">
                                            <h3>
                                                Amazon
                                            </h3>
                                        </div>
                                        <div className="text-[#3BA615] text-[12px]">
                                            <h3>
                                                Flat 30% off
                                            </h3>
                                        </div>
                                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                                GRAB NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                        <div className="justify-self-center pt-4 pb-4">
                                            <img src={amazon} alt="" />
                                        </div>
                                        <div className="mb-[5px] text-[14px] leading-5">
                                            <h3>
                                                Amazon
                                            </h3>
                                        </div>
                                        <div className="text-[#3BA615] text-[12px]">
                                            <h3>
                                                Flat 30% off
                                            </h3>
                                        </div>
                                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                                GRAB NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#FFF] flex flex-col pb-[10px] pt-[10px] pl-[22px] pr-[23px] rounded-lg h-[10.625rem] w-[12.5rem]">
                                    <div className="flex flex-col items-center justify-center self-center h-[9.7875rem] w-[8.25rem]">
                                        <div className="justify-self-center pt-4 pb-4">
                                            <img src={amazon} alt="" />
                                        </div>
                                        <div className="mb-[5px] text-[14px] leading-5">
                                            <h3>
                                                Amazon
                                            </h3>
                                        </div>
                                        <div className="text-[#3BA615] text-[12px]">
                                            <h3>
                                                Flat 30% off
                                            </h3>
                                        </div>
                                        <div className="bg-[#F01C21] text-[#FFF] rounded-lg mt-[8px]">
                                            <button className='text-[0.75rem] w-[9.25rem] h-[2.25rem] leading-none'>
                                                GRAB NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img4">
                                <img src={timeTravel} alt="" />
                            </div>
                        </div>
                        {/* slide bar */}
                        <div className='bg-[#FFF] flex justify-center my-10 pt-4 pb-6 w-[53.75rem] rounded-b-lg'>
                            <div className='bg-[#091431] rounded h-[8px] w-[48px] mr-[6px]'></div>
                            <div className='bg-[#D9D9D9] rounded h-[8px] w-[20px] mr-[6px] ml-[6px]'></div>
                            <div className='bg-[#D9D9D9] rounded h-[8px] w-[20px] ml-[6px]'></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* News letter starts here */}
            <div className="gradient-background w-full md:flex flex justify-center items-center py-6">
                <div className="postman bg-[#FFFFFF] flex flex-wrap md:w-full md:max-w-[53.75rem] md:h-[25rem] rounded-xl md:flex justify-center items-center">
                    <div className="bg-[rgb(245,245,245)] rounded-md md:w-[420px] md:h-[390px] w-full flex justify-center items-center">
                        <div className="h-[380px]">
                            <div className="flex justify-center items-center space-x-4 md:space-x-20">
                                <img src={union} alt="" />
                                <img src={union2} alt="" />
                                <img className="w-[41px] h-[24px]" src={union2} alt="" />
                            </div>
                            <div className='flex justify-center items-center mx-[27px] my-[17px]'>
                                <img className="w-[380px] h-[315px] shrink-0" src={postman} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl md:flex md:flex-col md:items-center gap-6 pl-3 mt-5 mb-5 md:mt-0">
                        <div className="flex flex-col flex-shrink-0 items-start gap-6">
                            <h3 className='text-3xl leading-10 font-semibold md:w-[258px] text-center md:text-left'>Subscribe to our Newsletter!</h3>
                            <p className='text-base text-[#908F8F] leading-6 md:w-[258px] w-full text-center md:text-left'>Be the first to get exclusive offers and the latest news</p>
                            <div className='input-email gap-2 md:w-[420px]'>
                                <input className='md:w-full w-[380px] px-5 py-4' type="text" placeholder="Enter your email address" />
                            </div>
                            <div className="bg-[#F01C21] rounded-lg px-4 py-3 md:w-[148px] gap-2 text-[#FFF] text-center md:text-left">
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News letter ends here */}

            {/* How it works start here */}
            <div className="bg-[#ECECEC]">
                <div className="bg-[#ECECEC] py-5">
                    <h3 className='text-2xl'>How It Works</h3>
                    <div className="flex justify-center">
                        <div className="bg-[#ECECEC] h-[3px] w-[76px]">
                            <div className="bg-[#F01C21] h-[3px] w-[76px]">
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center items-center"> */}
                <div className="md:flex md:justify-center md:items-center flex justify-center items-center flex-wrap gap-6 md:gap-6">
                    <div className="bg-[#FFF] rounded-2xl flex flex-col items-center justify-center px-4 py-6 w-full md:w-[17.0625rem] h-[14.625rem] md:gap-5">
                        <div className="img-icon p-4">
                            <img src={Login} alt="" />
                        </div>
                        <h3 className='text-[#091431]'>Signup</h3>
                        <p className='leading-6 text-[#454749]'>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                    </div>
                    <div className="bg-[#FFF] rounded-2xl flex flex-col items-center justify-center px-4 py-6 w-full md:w-[17.0625rem] h-[14.625rem] md:gap-5">
                        <div className="img-icon p-4">
                            <img src={Coupon2} alt="" />
                        </div>
                        <h3 className='text-[#091431]'>Choose Coupon</h3>
                        <p className='leading-6 text-[#454749]'>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                    </div>
                    <div className="bg-[#FFF] rounded-2xl flex flex-col items-center justify-center px-4 py-6 w-full md:w-[17.0625rem] h-[14.625rem] md:gap-5">
                        <div className="img-icon p-4">
                            <img src={Card} alt="" />
                        </div>
                        <h3 className='text-[#091431]'>Grab Coupon</h3>
                        <p className='leading-6 text-[#454749]'>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                    </div>
                </div>
                {/* </div> */}
                {/* How it ends start here */}
                {/* application starts here */}
                <div className="flex justify-center items-center py-10">
                    <div className="content">
                        <h3 className='texts'>Want to be a part of our team</h3>
                        <p className="paragraph"> Be a part of best site of discount coupons</p>
                        <div className="btn">
                            <button className='button-app bg-[#FFF] flex justify-center items-center px-5 py-3'>
                                <img src={appleicon} alt="" />
                                <div className="b">
                                    <p className='para'>
                                        Download Form
                                    </p>
                                    <h3 className='appstore'>
                                        APP STORE
                                    </h3>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

