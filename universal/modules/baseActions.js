export default function (reducerName) {
  return {
    fetchPending: `${reducerName}/fetch-pending`,
    fetchSuccess: `${reducerName}/fetch-success`,
    fetchFailure: `${reducerName}/fetch-failure`,

    createPending: `${reducerName}/create-pending`,
    createSuccess: `${reducerName}/create-success`,
    createFailure: `${reducerName}/create-failure`,

    updatePending: `${reducerName}/update-pending`,
    updateSuccess: `${reducerName}/update-success`,
    updateFailure: `${reducerName}/update-failure`,

    deletePending: `${reducerName}/delete-pending`,
    deleteSuccess: `${reducerName}/delete-success`,
    deleteFailure: `${reducerName}/delete-failure`
  }
}
