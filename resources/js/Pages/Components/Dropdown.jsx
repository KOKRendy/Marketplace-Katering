import React from "react"

export default function Dropdown({ children, text = "", className = "" }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div onClick={(e) => setIsOpen(false)} className={`absolute border top-0 right-0 left-0 bottom-0 ${isOpen ? '' : 'hidden'}`}></div>
            <div className={`${className} w-max relative`}>
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="px-5 py-1 border rounded-md">{text}</button>

                {isOpen && (
                    <div className="absolute top-[calc(100%+10px)] right-0 z-10">
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}