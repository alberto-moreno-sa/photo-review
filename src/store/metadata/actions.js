export const actionTypes = {
  SET_METADATA: 'SET_METADATA',
};

export function setMetadata(metadata) {
  return {
    type: SET_METADATA,
    payload: metadata,
  };
}
