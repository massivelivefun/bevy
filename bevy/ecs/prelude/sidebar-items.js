initSidebarItems({"derive":[["AmbiguitySetLabel",""],["Bundle",""],["Component",""],["RunCriteriaLabel",""],["StageLabel",""],["SystemLabel",""]],"struct":[["Added","A filter on a component that only retains results added after the system last ran."],["AnyOf","The `AnyOf` query parameter fetches entities with any of the component types included in T."],["ChangeTrackers","[`WorldQuery`] that tracks changes and additions for component `T`."],["Changed","A filter on a component that only retains results added or mutably dereferenced after the system last ran."],["Commands","A queue of commands that get executed at the end of the stage of the system that called them."],["Entity","Lightweight identifier of an entity."],["EventReader","Reads events of type `T` in order and tracks which events have already been read."],["EventWriter","Sends events of type `T`."],["Events","An event collection that represents the events that occurred within the last two [`Events::update`] calls. Events can be written to using an [`EventWriter`] and are typically cheaply read using an [`EventReader`]."],["In","Wrapper type to mark a [`SystemParam`] as an input."],["Local","A system local [`SystemParam`]."],["Mut","Unique mutable borrow of an entity’s component"],["NonSend","Shared borrow of a non-[`Send`] resource."],["NonSendMut","Unique borrow of a non-[`Send`] resource."],["Or","A filter that tests if any of the given filters apply."],["ParallelCommands","An alternative to [`Commands`] that can be used in parallel contexts, such as those in `Query::par_for_each`"],["ParamSet",""],["Query","Provides scoped access to components in a [`World`]."],["QueryState","Provides scoped access to a [`World`] state according to a given [`WorldQuery`] and query filter."],["ReflectComponent","A struct used to operate on reflected [`Component`] of a type."],["ReflectResource","A struct used to operate on reflected [`Resource`] of a type."],["RemovedComponents","A [`SystemParam`] that grants access to the entities that had their `T` [`Component`] removed."],["Res","Shared borrow of a resource."],["ResMut","Unique mutable borrow of a resource."],["RunCriteria",""],["Schedule","A container of [`Stage`]s set to be run in a linear order."],["State","Stack based state machine"],["SystemSet","A builder for describing several systems at the same time."],["SystemStage","Stores and executes systems. Execution order is not defined unless explicitly specified; see `SystemDescriptor` documentation."],["With","Filter that selects entities with a component `T`."],["Without","Filter that selects entities without a component `T`."],["World","Stores and exposes operations on entities, components, resources, and their associated metadata."]],"trait":[["AmbiguitySetLabel","Defines a set of strongly-typed labels for a class of objects"],["Bundle","An ordered collection of [`Component`]s."],["Component","A data type that can be used to store data for an entity."],["DetectChanges","Types that implement reliable change detection."],["ExclusiveSystemDescriptorCoercion",""],["FromWorld","Creates an instance of the type this trait is implemented for using data from the supplied [World]."],["IntoChainSystem","An extension trait providing the [`IntoChainSystem::chain`] method for convenient [`System`] chaining."],["IntoExclusiveSystem",""],["IntoSystem","Conversion trait to turn something into a [`System`]."],["ParallelSystemDescriptorCoercion",""],["RunCriteriaDescriptorCoercion",""],["RunCriteriaLabel","Defines a set of strongly-typed labels for a class of objects"],["Stage","A type that can run as a step of a `Schedule`."],["StageLabel","Defines a set of strongly-typed labels for a class of objects"],["System","An ECS system that can be added to a `Schedule`"],["SystemLabel","Defines a set of strongly-typed labels for a class of objects"],["SystemParamFunction","A trait implemented for all functions that can be used as [`System`]s."]]});