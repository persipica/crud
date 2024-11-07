import React from 'react'

export default function AddTopicPage() {
  return (
    <form className="flex flex-col gap-4 ">
      <input
        className="border border-slate-500 p-4 "
        type="text"
        placeholder="Topic Title"
      />
      <textarea
        className="border border-slate-500 p-4 h-32"
        placeholder="Topic description"
      />
      <button className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md">
        Add Topic
      </button>
    </form>
  )
}
