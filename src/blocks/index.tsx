import React from 'react'

type Block = {
  blockType?: string
  [key: string]: any
}

// contoh komponen dummy (bisa kamu ubah nanti)
function Hero({ heading }: { heading?: string }) {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-xl font-semibold">{heading || 'Hero Section'}</h2>
    </section>
  )
}

function FeatureSlider() {
  return (
    <section className="p-6 bg-gray-100">
      <p>Feature Slider Section</p>
    </section>
  )
}

// komponen utama untuk render semua blocks
export const RenderBlocks: React.FC<{ blocks?: Block[] }> = ({ blocks = [] }) => {
  if (!blocks?.length) return <p>No content yet.</p>

  return (
    <>
      {blocks.map((block, i) => {
        const type = block.blockType || block.type || ''
        switch (type) {
          case 'hero':
            return <Hero key={i} {...block} />
          case 'featureSlider':
            return <FeatureSlider key={i} {...block} />
          default:
            return (
              <div key={i} className="p-6 bg-red-50">
                Unknown block: {type}
              </div>
            )
          }
      })}
    </>
  )
}
