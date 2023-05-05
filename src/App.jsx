import "./index.css"

function App() {
  const currentAmount = 660241267.31
  const percent = (currentAmount * 100) / 8400000000

  return (
    <>
      <div className='h-screen flex flex-col justify-between items-center py-6'>
        <div className=' h-3/6 flex flex-col items-center justify-center'>
          <img
            src='src/assets/independiente-logo.png'
            alt=''
            className='w-48 h-48'
          />
          <p className=' text-center text-xl text-white mb-5'>
            ¿Cuánto va la colecta de Santi Maratea por Independiente?
          </p>
          <h1
            type='number'
            className='bg-white rounded text-red-600 p-1 font-bold text-5xl sm:text-6xl md:text-8xl'
          >
            ${currentAmount.toLocaleString("es")}
          </h1>
          <div className='w-full mt-2 bg-white rounded-full h-4 dark:bg-white'>
            <div
              className='bg-black h-4 rounded-full '
              style={{ width: `${percent}%` }}
            ></div>
            <p className='text-sm'>
              {percent.toFixed(2)}% aprox del total de la deuda del club
            </p>
          </div>
          <p className='font-bold mt-6 text-xs underline underline-offset-1'>
            Ult. actualización: 04/05/2023 00:01 hs
          </p>
          <a
            href='https://www.mercadopago.com.ar/checkout/v1/payment/redirect/d883895d-cddb-4f74-be0c-4f4b714a0213/review/?source=link&preference-id=1361289702-5bc1c9f6-be1e-426c-adbb-e86b115a725e&router-request-id=c27dcaae-7b44-4908-8662-a64c4220a6ae&p=87000e464d9f40cb0886119123a1c165'
            target='_blank'
            className='mt-8 font-bold flex flex-col items-center text-white underline text-white'
            rel='noreferrer'
          >
            Aportá $4000 para ayudar al Club
          </a>
        </div>
        <div>
          <p>
            Hecho por
            <a
              className='text-white'
              href='https://linktr.ee/emibrav'
              target='_blank'
              rel='noreferrer'
            >
              {" </emibrav>"}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
