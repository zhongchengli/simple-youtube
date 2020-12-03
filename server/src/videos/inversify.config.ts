import { VideoResolver } from './resolvers/VideoResolver';
import { VideoApi } from './apis/VideoApi';
import { VideoService } from './services/VideoService';
import { Container } from 'inversify';


const myContainer = new Container();

myContainer.bind(VideoResolver).toSelf();
myContainer.bind(VideoService).toSelf();
myContainer.bind(VideoApi).toSelf();

export { myContainer };