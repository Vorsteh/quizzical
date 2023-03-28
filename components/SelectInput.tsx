interface SelectProps {
    text: string;
    value: any;
    options: any[];
    name: string;
    onChange: any;
}
const SelectInput: React.FC<SelectProps> = ({text, value, options, name, onChange}) => {

    const categoryList = options.map(option => {
        return <option value={option.id} key={option.id}>{option.name}</option>
    })

    return (
        <div className='relative pb-5'>
            <p className='font-bold'>{text}</p>
            <select name={name} className='w-full p-2 bg-gray-300 rounded-sm outline-none' onChange={onChange}>
                {categoryList}
            </select>
        </div>
    )
}

export default SelectInput;