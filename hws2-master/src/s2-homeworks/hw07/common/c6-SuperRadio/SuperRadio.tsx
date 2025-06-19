import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
  options?: any[]
  onChangeOption?: (option: any) => void

  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  className,
  options,
  value,
  onChange,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // делают студенты        
    const SelectedItem: number = Number((e.currentTarget.id).substring(e.currentTarget.id.length - 1))
    if (onChangeOption) {
      onChangeOption(SelectedItem)
    }
  }

  const finalRadioClassName = s.radio + (className ? ' ' + className : '')
  const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

  const mappedOptions: any[] = options
    ? options.map((o) => (
      <label key={name + '-' + o.id} className={s.label}>
        <input
          id={id + '-input-' + o.id}
          className={finalRadioClassName}
          type={'radio'}
          // name, checked, value делают студенты
          name={name} // для радио кнопок name должен быть одинаковым
          // value={value} //! неправильно: value должен быть уникальным для каждой опции, потому что со старта значением value является цифра
          value={o.id} // value должен быть id опции, чтобы можно было получить значение при изменении //!правильно: value уникален для каждой опции
          checked={value == o.id} // checked должно быть true, если value совпадает с id опции
          // input.checked= true
          onChange={onChangeCallback}
          {...restProps}
        />
        <span
          id={id + '-span-' + o.id}
          {...spanProps}
          className={spanClassName}
        >
          {o.value}
        </span>
      </label>
    ))
    : []

  return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
