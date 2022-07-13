export const dateFromTimestamp = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric"
  })
}

export const timeFromTimestamp = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString("ru", {
    hour: "numeric",
    minute: "numeric",
  })
}
