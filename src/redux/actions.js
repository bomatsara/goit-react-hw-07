export function setPending(state) {
  state.loading = true;
  state.error = false;
}

export function setRejected(state) {
  state.loading = false;
  state.error = true;
}