const saveToSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, value);
}

export default saveToSessionStorage