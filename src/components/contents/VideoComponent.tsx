import 'vidstack/styles/defaults.css';
import 'vidstack/styles/community-skin/video.css';

import { MediaCommunitySkin, MediaOutlet, MediaPlayer, MediaPoster, useMediaRemote, useMediaStore } from '@vidstack/react';
import { CiPlay1 } from 'react-icons/ci'
import { ReactNode, useRef } from 'react';
type Props = {
    children:ReactNode,
    source:string,
    poster:string,
    title:string
}

const VideoComponent = ({title, source, poster, children}: Props) => {
    const player = useRef<EventTarget>(null)
    const remote = useMediaRemote(player);
    return (
        <MediaPlayer
            ref={player}
            title={title}
            src={source}
            poster={poster}
            aspectRatio={16 / 9}
            className='relative rounded-xl shrink-0 '
            crossorigin=""
            >
                <button onClick={() => remote.play()} className='absolute media-buffering:hidden media-playing:hidden z-50 transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] w-8 h-8 lg:w-24 lg:h-24 flex justify-center items-center  rounded-full bg-white bg-opacity-50'>
                    <CiPlay1 className='lg:text-4xl text-white' />
                </button>
                {children}
                <MediaOutlet >
                    <MediaPoster
                    alt="Girl walks into sprite gnomes around her friend on a campfire in danger!"
                    />
                </MediaOutlet >
                <MediaCommunitySkin className='media-paused:hidden' />
        </MediaPlayer>

  )
}

export default VideoComponent