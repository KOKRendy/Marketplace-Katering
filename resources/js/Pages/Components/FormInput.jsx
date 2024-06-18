export default function FormInput({ type = "text", placeholder, value, onChange, label = "Label" }) {
    return (
        <div className="mb-5">
            <h5 className="mb-2">{label}</h5>
            <input className="border p-2 px-3 w-full rounded-md outline-none" value={value} onChange={onChange} type={type} placeholder={placeholder} />
        </div>
    )
}