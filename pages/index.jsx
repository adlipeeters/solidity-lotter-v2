import Head from 'next/head'
import styled from '@emotion/styled'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Jackpots from '@/components/Jackpots'
import { getLotteries } from '@/services/blockchain'

export default function Home({ jackpots }) {
  // console.log(jackpots)
  return (
    <div>
      <Head>
        <title>Lottery Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <Jackpots jackpots={jackpots} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await getLotteries()
  return {
    props: {
      jackpots: JSON.parse(JSON.stringify(data)),
    },
  }
}