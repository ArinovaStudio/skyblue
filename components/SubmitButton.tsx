import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
export default function SubmitButton({text,disabled=false,...props}:any) {
  const {pending} = useFormStatus();
  return (
    <Button disabled={pending || disabled} {...props}>{pending ? <Loader2 className='animate-spin'/>:text}</Button>
  )
}
