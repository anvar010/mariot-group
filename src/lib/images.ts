/**
 * Central photography catalogue.
 *
 * Every image is served from Unsplash through the Next image optimizer. The
 * source query string is fixed so `images.remotePatterns` in next.config.ts can
 * pin it exactly — changing SOURCE_QUERY means changing that config too.
 *
 * `tone` is the dominant colour of each photo and is painted behind the frame,
 * so a slow-loading image never flashes bare paper.
 */
export type Photo = {
  id: string;
  alt: string;
  tone: string;
  blurDataURL: string;
};

const SOURCE_QUERY = '?auto=format&fit=crop&w=1920&q=80';

export function photoSrc(photo: Photo): string {
  return `https://images.unsplash.com/${photo.id}${SOURCE_QUERY}`;
}

export const PHOTOS = {
  chefFlame: {
    id: 'photo-1600565193348-f74bd3c7ccdf',
    alt: 'Chef searing in a flaming pan on a commercial cooking range',
    tone: '#180808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIhAAAgEDBAIDAAAAAAAAAAAAAQIDAAQRBRITMSEiQVGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAMAwEAAhEDEQA/AIvUjttWkVIk4wFOw5IYsB1+0S60aZLiQSCDeWJOHxjJoC3cs06Ru3rzKPnPf3Wi0rSyyvIAzFz5NCLdSyb/2Q==',
  },
  chefPlating: {
    id: 'photo-1577106263724-2c8e03bfe9cf',
    alt: 'Chef plating a dish with tweezers on a stainless steel pass',
    tone: '#080808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAjEAACAQMEAQUAAAAAAAAAAAABAgMEETEABRIhBhMUYXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAkES/9oADAMBAAIRAxEAPwCXWwy75unuKergROAAPqWK2GLZzqn47PPTbWI5Kd2IdrNyA5C+e/3Sl8T2oQPK0Lsb4MhAHfxojTGFjEqLxQkLe/Qv96Km8FnnT//Z',
  },
  chefPortrait: {
    id: 'photo-1581299894007-aaa50297cf16',
    alt: 'Executive chef in whites standing in a restaurant dining room',
    tone: '#f8f8f8',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAgEAACAgICAgMAAAAAAAAAAAABAgMRAAQFIRMUMUFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAQEBAQAAAAAAAAAAAAAAAAECACH/2gAMAwEAAhEDEQA/AJofT1Y08sql1SQFSRYJIAN/n1i2uP14thlhmEidU1g3185DxmnHuctHrSlgjsQSpo9DEvGwM8oJkpXIADkUMGiZBckrTzf/2Q==',
  },
  restaurantDark: {
    id: 'photo-1517248135467-4c7edcad34c4',
    alt: 'Dark contemporary restaurant dining room with timber chairs',
    tone: '#080808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAfEAACAgICAwEAAAAAAAAAAAABAgMRAAQFQSExUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBB/9oADAMBAAIRAxEAPwAHS4zXExaeVjGKpgpq6+/hrGtSDi1Eyy7RtZWCm/Y6wLWAFEqCfZvvLJpGJXz18wDZXL//2Q==',
  },
  restaurantWarm: {
    id: 'photo-1552566626-52f8b828add9',
    alt: 'Warm brasserie interior with an open grill counter',
    tone: '#081818',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQF/8QAIBAAAgICAAcAAAAAAAAAAAAAAQIDBAAhBRIjMVSD8f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAARIC/9oADAMBAAIRAxEAPwDOt8LjCM6mQKDvp6+ZIaEXkOPUTjKlWjq0yiAtzEli+ycMXL8kNuWONI1VXI0vfDtiTk//2Q==',
  },
  restaurantSteel: {
    id: 'photo-1555396273-367ea4eb4db5',
    alt: 'Industrial restaurant interior with pendant lighting and open kitchen',
    tone: '#181818',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgME/8QAHxAAAgIBBQEBAAAAAAAAAAAAAQIDEQAEBRIhIpGx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8Aht2iiKXqHp0HhVWgPo7GCOB1jW5Ati64Kf0Zo2slUL2SxIFkk4Z7ilamLcvRLAHs4axRH//Z',
  },
  bar: {
    id: 'photo-1514933651103-005eec06c04b',
    alt: 'Back bar with taps, bottles and a chalkboard menu',
    tone: '#181818',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBf/EACEQAAICAgEEAwAAAAAAAAAAAAECAxEABBITISIxQVGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAMAwEAAhEDEQA/AMmDU1ZIRwmUsTfJhVV7H1gePW13ZHks2SKSxWRNM3TCmj5fuKkclvVdvgnBxZ6hf//Z',
  },
  cafe: {
    id: 'photo-1554118811-1e0d58224f24',
    alt: 'Café interior with rattan chairs and an espresso counter',
    tone: '#383838',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAH/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMAESEEEjEiMkFxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oADAMBAAIRAxEAPwA02qmlgN4Wwe4NgexRjqp0suxcDwAadMoSRIk6VI+1JA0QRY5HA2355NzRIK0//9k=',
  },
  cafeCounter: {
    id: 'photo-1521017432531-fbd92d768814',
    alt: 'Café service counter with timber communal tables',
    tone: '#183838',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAIBAAAgEDBAMAAAAAAAAAAAAAAQIDABESBAUxURNBQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREv/aAAwDAQACEQMRAD8ADqIY1djOpljT6U25PfuiSRDM46eRR0Te1aHdQIYJsQL+Im5F6m7W5m0l3Ckq2IOI4qKzk3L/2Q==',
  },
  coffee: {
    id: 'photo-1495474472287-4d71bcdd2085',
    alt: 'Three hands raising latte art coffees over a table',
    tone: '#080808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAgEAACAAcAAwEAAAAAAAAAAAABAgADBBESEyFxobHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8ACU9KHagdGDz1LawLC5HL/YmSnSgyp5kwZKe3F/YiY1D7GdgHdQVV2JuB5gtmYzZQS3T0/sCaa//Z',
  },
  bakeryDisplay: {
    id: 'photo-1517433670267-08bbd4be890f',
    alt: 'Bakery display case filled with breads and baguettes',
    tone: '#080818',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACMQAAIBAwMEAwAAAAAAAAAAAAECAwAEERIiMQUTITJBkaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARIf/aAAwDAQACEQMRAD8Aw4Y5Y2LwyXCOy6SyR7cfOTmq7rtichoVlOPZQuP2hh6jMtvHGAoUnTweBS5Llrhy0qqSNufPH3QLbscKMn//2Q==',
  },
  bread: {
    id: 'photo-1509440159596-0249088772ff',
    alt: 'Rustic sourdough loaves dusted with flour and wheat ears',
    tone: '#282828',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAHxAAAwACAgIDAAAAAAAAAAAAAQIDBBEAEiEiMXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABAhL/2gAMAwEAAhEDEQA/ADsRVyJBoMsuh8OF2fziM5V0Q1cd2B0xefnfMORNZYk8mfrQDR18H75OBa0+7u2zwqWPR//Z',
  },
  laundry: {
    id: 'photo-1545173168-9f1947eebb7f',
    alt: 'Row of stainless steel industrial washing machines',
    tone: '#e8e8e8',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAiEAACAgIBAwUAAAAAAAAAAAABAgMEABEFEiExQUJhgZH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwBeLkWaxDCImhRiw0R50oIG/s/mRzWZ1YsLbIzks4De7ffFrl6xUqVZYH6TMNlSNhSPUA+MQfg6VpzO8fSzgEhNAb0PjJpj/9k=',
  },
  welding: {
    id: 'photo-1504328345606-18bbc8c9d7d1',
    alt: 'Welder joining steel with sparks flying from the torch',
    tone: '#081828',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EACIQAAEEAQMFAQAAAAAAAAAAAAECAwQRAAUyQRIhIiNhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAYEQEBAAMAAAAAAAAAAAAAAAABAAJBUf/aAAwDAQACEQMRAD8ANxCZEoNupLpV4gk3X3FcKQH4qFKaUKHSPwYWivLb9bdJte4bh34PGN9GerT0AtNmuSMS9iYur//Z',
  },
  technician: {
    id: 'photo-1621905251189-08b45d6a269e',
    alt: 'Service technician in a hard hat wiring an electrical panel',
    tone: '#885848',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAHxAAAQQCAgMAAAAAAAAAAAAAAQIDBBEAIQUiExRx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQACAwAAAAAAAAAAAAAAAAAAAREhMf/aAAwDAQACEQMRAD8AlEpE53yeuWwRXTZUfmJxbEdAVVgUazNtPOMNJLSyk2rYO8c45RMFqzfXJSihen//2Q==',
  },
  catering: {
    id: 'photo-1555244162-803834f70033',
    alt: 'Catering buffet line with chafing dishes and canapés',
    tone: '#080818',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAADAAICAQUAAAAAAAAAAAABAgMABBESITFBYZGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAQACAwAAAAAAAAAAAAAAAAEAAhEhMf/aAAwDAQACEQMRAD8AXbY2YusO1Fn1VRVJgEHgePXA1tv0ctJt+yezzVQPzLjacnkgp2oAwIVj4HI+MXPXSM1mOzBRwCx5P3g0F2xLOOT/2Q==',
  },
  supermarket: {
    id: 'photo-1542838132-92c53300491e',
    alt: 'Refrigerated supermarket shelves stocked with fresh produce',
    tone: '#081808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgEF/8QAIxAAAgEDAwQDAAAAAAAAAAAAAQIRAAMSBCExBRNBYXGxwf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEAAgMAAAAAAAAAAAAAAAAAACEBAjH/2gAMAwEAAhEDEQA/AMttYbivjbxA8iI+qo6iioobtM0bnIj8pPDXNTKiT64+KNoBbSjFDzuVE8mpJwWrR//Z',
  },
  hospital: {
    id: 'photo-1586773860418-d37222d8fce3',
    alt: 'Modern hospital building entrance and canopy',
    tone: '#c8d8e8',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIxAAAQMDAgcAAAAAAAAAAAAAAQIDEQAEBTFREhMhJKHB0f/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAESEB/9oADAMBAAIRAxEAPwBG9zjNq6Gbdbbrm6tB9o8526Uo9yEwYgJHTxWb5hJmEzvGtW26G3muNxpJUSZMke6VC4sP/9k=',
  },
  hotel: {
    id: 'photo-1542314831-068cd1dbfeeb',
    alt: 'Contemporary hotel exterior and lit pool at dusk',
    tone: '#2868d8',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgME/8QAHRAAAgIDAAMAAAAAAAAAAAAAAQIDBAAREiEzgf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAMSYf/aAAwDAQACEQMRAD8Ax0XsMvAqTSHXRLLzvWFrLqxC1J/qnBNdnikISQgKNDyTk57Uwk9hJIB2co27AEq0/9k=',
  },
  resort: {
    id: 'photo-1566073771259-6a8506099945',
    alt: 'Beach resort deck with sun loungers beside a pool',
    tone: '#886858',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgME/8QAJBAAAgEEAQIHAAAAAAAAAAAAAQIDAAQFERIhMUFCUWFxkdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AOTyEtzM7KTEAOKKdgj78e9ZUuZ0UAwXMmh0fj3FVzN3KlzFDsGMqrsp8x9D7Uo8vcMu9IPjf7RUsYsVqTP/Z',
  },
  villaKitchen: {
    id: 'photo-1556909212-d5b604d0c90d',
    alt: 'Bright white private villa kitchen with a marble island',
    tone: '#c8c8c8',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwEF/8QAHxAAAgICAQUAAAAAAAAAAAAAAQIDEQAhBAUiMVLR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAAMBAAAAAAAAAAAAAAAAAAARIUH/2gAMAwEAAhEDEQA/ANmN3MSMWskbI8HWJAzSQqzMtkbrJyeIk0Y75I69DWD06IrxFAlcAEgDXzDRUZ//2Q==',
  },
  fineDining: {
    id: 'photo-1414235077428-338989a2e8c0',
    alt: 'Plated fine dining course being served at a set table',
    tone: '#080808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACAQAAICAAcBAQAAAAAAAAAAAAECAwQABRESITFBQiL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oADAMBAAIRAxEAPwCuypIgsoGeAgJv7LHX3s94zXI4Y5QtiKMNt42hdCPPrDZjRrxZXXsLEBI45I/Pzr5p7g5WleTK6zSVKzsU5ZowScDRniX/2Q==',
  },
  steakPlate: {
    id: 'photo-1600891964092-4316c288032e',
    alt: 'Sliced steak and hand-cut fries on a white plate',
    tone: '#080808',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAEC/8QAIxAAAgIBBAAHAAAAAAAAAAAAAQIDBBEAEiExBRMiQVFhof/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQJB/9oADAMBAAIRAxEAPwDE7160b16ywxI3BGwMcY+T2T3oEph3DzIIwQMeoDP7qG29qeJyqRl0BOxfck8850e74vLRtPBHXrOF7aWLexP2ToJl6x6qcR//2Q==',
  },
  tableSpread: {
    id: 'photo-1504674900247-0877df9cc836',
    alt: 'Overhead view of several plated dishes on a timber table',
    tone: '#a89898',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgME/8QAIRAAAgEEAAcAAAAAAAAAAAAAAQIRAAMEEiEiMUFhcbH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAQADAAAAAAAAAAAAAAAAAAABEVH/2gAMAwEAAhEDEQA/AC2RLoI2aIJXr7o3M0huS62sdj9rEma9tiuiMCu42BlT4M1W2BoCVUluJkVKp03/2Q==',
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
