/* eslint-disable no-unused-vars */
import React, { act } from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='lg:plex flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt="" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt=''/>
                <img className='w-4  cursor-pointer' src={assets.pause_icon} alt=''/>
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt=''/>
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
            </div>
            
            <div className='flex items-center gap-5'>
                <p>0:00</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-green-500 rounded-full' />
                </div>
                <p>3:20</p>
            </div>
      </div>

      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4 cursor-pointer ' src={assets.plays_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="" />
        <div className='w-20 rounded-full bg-slate-50 h-1 '>

        </div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player