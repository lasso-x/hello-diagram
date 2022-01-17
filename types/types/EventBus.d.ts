declare class EventBus<Event extends BaseEvent> {
    private handlers;
    private getHandlers;
    on<Name extends Event['name']>(names: Name | Name[], handler: EventHandler<EventByName<Event, Name>>): () => void;
    one<Name extends Event['name']>(names: Name | Name[], handler: EventHandler<EventByName<Event, Name>>): () => void;
    off<Name extends Event['name']>(names: Name | Name[], handler: EventHandler<EventByName<Event, Name>>): void;
    emit<E extends Event>(event: E): void;
}
export default EventBus;
export interface BaseEvent {
    name: string;
}
export declare type EventByName<Event extends BaseEvent, Name extends Event['name']> = (Event extends {
    name: Name;
} ? Event : never);
export declare type EventHandler<E extends BaseEvent> = (event: E) => void;
