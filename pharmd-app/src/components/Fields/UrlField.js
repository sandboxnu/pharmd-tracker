import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import LaunchIcon from '@material-ui/icons/Launch';

const Icon = styled(LaunchIcon)`
	${tw`w-2 p-1`}
`;

const Field = styled.a`
	${tw` no-underline text-primary`}
`;

const UrlField = ({ record = {}, source }) => (
	<Field href={record[source]}>
		{record[source]}
		<Icon />
	</Field>
);

export default UrlField;
