import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEquation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly equation?: string | null;
  readonly intercepts?: string | null;
  readonly domain?: string | null;
  readonly range?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly equation?: string | null;
  readonly intercepts?: string | null;
  readonly domain?: string | null;
  readonly range?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equation = LazyLoading extends LazyLoadingDisabled ? EagerEquation : LazyEquation

export declare const Equation: (new (init: ModelInit<Equation>) => Equation) & {
  copyOf(source: Equation, mutator: (draft: MutableModel<Equation>) => MutableModel<Equation> | void): Equation;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}