interface SelectProps {
    text: string;
    value: any;
    options: any[];
    name: string;
    onChange: any;
}
const SelectInput: React.FC<SelectProps> = ({text, value, options, name, onChange}) => {

    const optionList = options.map(option => {
        return <option value={0} key={option} className='bg-gray-100'>{option}</option>
    })

    return (
        <div className='relative pb-5'>
            <p className='font-bold'>{text}</p>
            <select name={name} className='w-full p-2 bg-gray-300 rounded-sm outline-none' onChange={onChange}>
                {optionList}
            </select>
        </div>
    )
}

export default SelectInput;