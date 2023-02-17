import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const Registered = () =>
{
  return (
    <div className="flex gap-4 justify-center">
      <div className="w-8 rounded-full bg-brand p-1 text-white">
        <CheckIcon />
      </div>
      Congratulations! You have successfully registered.
    </div>
  )
}

export default Registered;
