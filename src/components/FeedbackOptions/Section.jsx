import React from 'react'

export const Section = ({ title, children }) => {
  return (
      <section>
          <h3>{title}</h3>
          {children}
      </section>
  )
}

export default Section