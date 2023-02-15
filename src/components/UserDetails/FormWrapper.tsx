import type { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  description?: string
  children: ReactNode
}

export function FormWrapper({ title, description, children }: FormWrapperProps)
{
  return (
    <>
      <div className="m-0 font-semibold">
        { title }
      </div>
      <div className="m-0 mb-1 text-gray-500 font-light">
        { description }
      </div>
      <div className="flex flex-col gap-4">
        { children }
      </div>
    </>
  )
}