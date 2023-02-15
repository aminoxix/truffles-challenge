import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

type NotificationProps = {
    sensex?: string,
    company?: string,
    tfid?: string,
    show?: boolean,
    price?: string,
    closeSymbol?: string,
    close?: () => void
}

const Notification: NextPage<NotificationProps> = ({ sensex, company, tfid, show, price, close, closeSymbol }) =>
{

    const [ showNotification, setShowNotification ] = React.useState(show)
    const handleClose = () =>
    {
        setShowNotification(false);
        close && close();
    }

    React.useEffect(() =>
    {
        setShowNotification(show);
    }, [ show ]);

    if (!showNotification) return null;

    return (
        <div>
            <div className="flex basis-20 shrink-0 items-center font-inter justify-between px-6 py-3 text-sm font-medium border border-transparent rounded-md shadow-sm">
                <div className="flex basis-14 shrink-0 items-center justify-center">
                    <Image
                        src={ sensex || "" }
                        width={ 25 }
                        height={ 25 }
                        alt="symbol"
                    />
                </div>
                <div className='flex flex-1 justify-between'>
                    <div className="flex-col items-center">
                        <p>{ company?.toUpperCase() }</p>
                        <p className="mr-4">{ tfid?.toUpperCase() }</p>
                    </div>
                    <div>
                        { price }
                    </div>
                    <button onClick={ handleClose } className="text-white hover:text-gray-300">
                        <Image
                            src={ closeSymbol || "" }
                            width={ 15 }
                            height={ 15 }
                            alt="close"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notification;