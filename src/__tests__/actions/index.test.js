import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('top stories reducer actions', ()=> {
  it('getTopStoriesSuccess should create GET_TOP_STORIES_SUCCESS ACTION', ()=>{
    const topStories= "An article";
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type:c.GET_TOP_STORIES_SUCCESSS,
      topStories
    });
  });

  it('getTopStoriesFailure should create GET_TOP_STORIES_FAILURE action',()=>{
    const error = "An error";
    expect (actions.getTopSToriesFailure(error)).toEqual({
      type: c.GET_TOP_STORIES_FAILURE,
      error
    });
  });
});
