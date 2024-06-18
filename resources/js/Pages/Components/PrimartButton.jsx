export default function PrimaryButton({ className = "", children, type = "button" }) {
    return (
        <button type={type} className={`${className} p-2 border rounded-md bg-black text-white`}>
            {children}
        </button>
    )
}