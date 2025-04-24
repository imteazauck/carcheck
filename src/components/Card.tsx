import React, { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}