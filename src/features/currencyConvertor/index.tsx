import { Text, View, FlatList } from 'react-native'
import React from 'react'
import { ICurrencyConvertor } from '../../types/currencyConvertor'
import styles from '../styles/currencyConvertor'
import CurrencyButton from '../../components/atom/CurrencyButton';


export const currencyData: ICurrencyConvertor[] = [
  {
    name: 'US Dollar',
    value: 1,
    symbol: 'USD',
    flag: '🇺🇸',
  },
  {
    name: 'Euro',
    value: 0.92,
    symbol: 'EUR',
    flag: '🇪🇺',
  },
  {
    name: 'British Pound',
    value: 0.79,
    symbol: 'GBP',
    flag: '🇬🇧',
  },
  {
    name: 'Indian Rupee',
    value: 83.1,
    symbol: 'INR',
    flag: '🇮🇳',
  },
  {
    name: 'Japanese Yen',
    value: 149.6,
    symbol: 'JPY',
    flag: '🇯🇵',
  },
  {
    name: 'Canadian Dollar',
    value: 1.36,
    symbol: 'CAD',
    flag: '🇨🇦',
  },
  {
    name: 'Australian Dollar',
    value: 1.52,
    symbol: 'AUD',
    flag: '🇦🇺',
  },
  {
    name: 'Swiss Franc',
    value: 0.89,
    symbol: 'CHF',
    flag: '🇨🇭',
  },
  {
    name: 'Chinese Yuan',
    value: 7.29,
    symbol: 'CNY',
    flag: '🇨🇳',
  },
  {
    name: 'Singapore Dollar',
    value: 1.36,
    symbol: 'SGD',
    flag: '🇸🇬',
  },

  // 🪙 Crypto Currencies
  {
    name: 'Bitcoin',
    value: 0.000015,
    symbol: 'BTC',
    flag: '₿',
  },
  {
    name: 'Ethereum',
    value: 0.00022,
    symbol: 'ETH',
    flag: 'Ξ',
  },
  {
    name: 'Tether',
    value: 1.0,
    symbol: 'USDT',
    flag: '🪙',
  },
  {
    name: 'Binance Coin',
    value: 0.0027,
    symbol: 'BNB',
    flag: '🟡',
  },
  {
    name: 'Ripple',
    value: 1.85,
    symbol: 'XRP',
    flag: '💧',
  },
  {
    name: 'Dogecoin',
    value: 12.5,
    symbol: 'DOGE',
    flag: '🐶',
  },
  
];


const CurrencyConvertor = () => {
  return (
    <View>
       <FlatList
        data={currencyData}
        renderItem={({item}) => <CurrencyButton name={item.name} flag={item.flag} />}
        keyExtractor={item => item.symbol}
      />
    </View>
  )
}

export default CurrencyConvertor
