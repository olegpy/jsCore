Object

.getKeys(): Array - returns an array of objects keys (don't use Objects.keys() :))
.getValues(): Array - returns an array of values
.getKeyValuePair(key: string): string - returns a key"value pair in the next format "[key] : value"
.createShallowCopy(sourceObj: object): object - returns "shallow" copy of provided object. The references of the first level must be copied, if there are references deeped, provide a link, not a copy.
.createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.
.createFlatObject(providedObj: object): object - returns a new object with "flat" structure - all field deeper than 1 level must be moved to the first level. If you have fields with the same names rename them using name of the parent as prefix:
	{
		field1: {
			name: 'User1',
			age: 20
		},
		field2: {
			name: 'User2',
			age: 22
		},
		field3: {
			name: 'User3',
			age: 24
		}
	}
	=>
	{
		field1_name: 'User1',
		field1_age: 20
		...
	}
.getPropertyValue(obj: object): any - returns a value of provided key name. In case if you have duplicated results (see example above), return an array of values. Throw an exception in case if you don't have any results.