export const actionTypes = {
  SET_METADATA: 'SET_METADATA',
  SET_APPROVED: 'SET_APPROVED',
  SET_REJECTED: 'SET_REJECTED',
};

export function setMetadata(metadata) {
  return {
    type: actionTypes.SET_METADATA,
    payload: metadata,
  };
}

export function setApprove(data) {
  return {
    type: actionTypes.SET_APPROVED,
    payload: data,
  };
}

export function setRejected(data) {
  return {
    type: actionTypes.SET_REJECTED,
    payload: data,
  };
}
