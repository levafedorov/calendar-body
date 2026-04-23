export function useCalendarEventModal() {
  const isEventModalOpen = useState<boolean>('calendar:event-modal-open', () => false)

  function openEventModal() {
    isEventModalOpen.value = true
  }

  function closeEventModal() {
    isEventModalOpen.value = false
  }

  function toggleEventModal() {
    isEventModalOpen.value = !isEventModalOpen.value
  }

  return {
    openEventModal,
    closeEventModal,
    toggleEventModal,
    isEventModalOpen
  }
}
