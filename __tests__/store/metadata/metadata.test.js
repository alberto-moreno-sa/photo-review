import {
  actionTypes,
  setMetadata,
  setRejected,
  setApprove,
} from '../../../src/store/metadata/actions';
import {
  metadataInitialState,
  metadataReducer,
} from '../../../src/store/metadata/reducers';

describe('MetadataRedux', () => {
  describe('Action setMetadata', () => {
    it('returns action and payload as expected', () => {
      const newMetadata = metadataInitialState;
      const action = setMetadata(newMetadata);
      const reducer = metadataReducer(metadataInitialState, action);
      expect(action.type).toBe(actionTypes.SET_METADATA);
      expect(action.payload).toMatchObject(newMetadata);
      expect(reducer).toMatchObject(newMetadata);
    });

    it('should be add new photo', () => {
      const approvedImg = {
        id: '2333',
        urls: { regular: 'http://example.com' },
      };

      const newMetadata = {
        ...metadataInitialState,
        approved: [approvedImg],
      };

      const action = setApprove(approvedImg);

      const reducer = metadataReducer(metadataInitialState, action);
      expect(action.type).toBe(actionTypes.SET_APPROVED);
      expect(action.payload).toMatchObject(approvedImg);
      expect(reducer).toMatchObject(newMetadata);
    });

    it('should be not add new photo when already approved', () => {
      const approvedImg = {
        id: '2333',
        urls: { regular: 'http://example.com' },
      };

      const newMetadata = {
        ...metadataInitialState,
        approved: [approvedImg],
      };

      const action = setApprove(approvedImg);

      const reducer = metadataReducer(newMetadata, action);
      expect(action.type).toBe(actionTypes.SET_APPROVED);
      expect(action.payload).toMatchObject(approvedImg);
      expect(reducer).toMatchObject(newMetadata);
    });

    it('should be add to rejected new photo', () => {
      const rejecteddImg = {
        id: '2333',
        urls: { regular: 'http://example.com' },
      };

      const newMetadata = {
        ...metadataInitialState,
        approved: [],
        rejected: [rejecteddImg],
      };

      const action = setRejected(rejecteddImg);

      const reducer = metadataReducer(metadataInitialState, action);
      expect(action.type).toBe(actionTypes.SET_REJECTED);
      expect(action.payload).toMatchObject(rejecteddImg);
    });

    it('should be not add new photo to rejected when already approved', () => {
      const rejecteddImg = {
        id: '2333',
        urls: { regular: 'http://example.com' },
      };

      const newMetadata = {
        ...metadataInitialState,
        approved: [],
        rejected: [rejecteddImg],
      };

      const action = setRejected(rejecteddImg);

      const reducer = metadataReducer(newMetadata, action);
      expect(action.type).toBe(actionTypes.SET_REJECTED);
      expect(action.payload).toMatchObject(rejecteddImg);
    });
  });
});
