import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="flex justify-center bg-black w-full text-white p-4">
        <h1 className="text-2xl">お弁当注文</h1>
      </div>
      <div className="mt-6 p-3 w-full flex justify-center">
         <input
            className={"border-4"}
            placeholder={"社員ID入力"}
            type={"text"}
          />
      </div>
      <div className="mt-3 w-full flex justify-center">
       <input
          className={"border-4"}
          placeholder={"名前"}
        />
        </div>
        <div className="mt-10 w-full flex justify-center">
          <a href="/detail">Next</a>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <p>この画面は動作イメージです。 PCの場合はF12キーで開発モードを有効にしてください</p>
        </div>
    </main>
  )
}
