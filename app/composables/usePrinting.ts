export const usePrinting = () => {
  const isPrinting = ref(false);

  onMounted(() => {
    window.addEventListener("beforeprint", () => (isPrinting.value = true));
    window.addEventListener("afterprint", () => (isPrinting.value = false));
  });

  return { isPrinting };
};
