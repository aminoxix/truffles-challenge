import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

type ToastProps = {
    symbol?: string,
    message?: string,
    description?: string,
    show?: boolean,
    closeSymbol?: string,
    close?: () => void
}

const Toast: NextPage<ToastProps> = ({ symbol, message, description, show, close, closeSymbol }) =>
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
            <div className="flex basis-20 items-center font-inter justify-between px-6 py-3 text-sm font-medium border border-transparent rounded-md shadow-sm">
                <div className="flex basis-14 items-center justify-center">
                    <Image
                        src={ symbol || "" }
                        width={ 30 }
                        height={ 30 }
                        alt="symbol"
                    />
                </div>
                <div className='flex flex-1 justify-between'>
                    <div className="flex-col items-center">
                        <p>{ message }</p>
                        <p className="mr-4">{ description }</p>
                    </div>
                    <button onClick={ handleClose } className="text-white hover:text-gray-300">
                        <Image
                            src={ closeSymbol || "" }
                            width={ 20 }
                            height={ 20 }
                            alt="close"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Toast;