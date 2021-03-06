import React from 'react'
import Markdown from 'markdown-to-jsx'
import useSpecialField from '../hooks/useSpecialField'
import { FieldInterface } from './types'

export const TextArea = ({
  defaultValue = '',
  fieldId,
  placeholder,
}: FieldInterface) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <div className="fresh-markdown-wrapper">
      <textarea
        id={`fresh-${fieldId}`}
        placeholder={placeholder}
        value={fieldState || ''}
        className="fresh-input fresh-input-textarea"
        onChange={e => update({ id: fieldId, value: e.target.value })}
      />
      <div className="fresh-input fresh-input-markdown">
        <Markdown children={fieldState || ''} />
      </div>
    </div>
  )
}

export default TextArea
