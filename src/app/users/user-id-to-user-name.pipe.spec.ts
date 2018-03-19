import { UserIdToUserNamePipe } from './user-id-to-user-name.pipe';

describe('UserIdToUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserIdToUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
