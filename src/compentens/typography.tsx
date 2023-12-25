import React from 'react';
import { Divider, Typography } from 'antd';
import { GithubFilled } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
const blockContent = `项目的开发过程中，我们注重了以下几个方面：

1. 用户权限管理：通过使用 React 和 Redux，我们实现了灵活的用户权限管理系统，比如登录拦截，退出登录。

2. 性能优化：使用 webpack 手动搭建React项目，支持更多功能配置，以提高应用程序的加载性能。

3. 数据持久化：利用 Redux 和本地存储，我们实现了数据的持久化，确保用户在刷新页面或关闭浏览器后仍能保留其状态。

这些方面的考虑使得 shopping-Admin 成为一个功能强大且用户友好的管理系统。
`;
const TypoGraphy = () => {
    return <Typography>
        <Title>项目背景</Title>

        <Paragraph>
            shopping-Admin的开发源于学生在上半年期间开发的shopping-store<Link href="https://github.com/codeshihaoran/shopping-store-frontend">shopping-store</Link>的商品，订单，用户等等做了后台管理化的处理。目的是为了更好的管理数据，不再手改数据库来测试数据。更是为了锻炼<Text code>React</Text>和<Text code>Ts</Text>的项目实战经验
        </Paragraph>
        在这个项目中，我们面临了一些挑战，如数据管理、用户权限控制、性能优化等。通过解决这些问题，我们积累了丰富的前端和后端开发经验。
        <Paragraph>

        </Paragraph>

        <Title level={2}>技术栈</Title>

        <Paragraph>
            学生在这段时间学习了更多的技术，来开发这款项目（<Text code>前端</Text> 和
            <Text code>后端</Text>），来帮助学生对这门行业有更深入的了解以及技术层面。
        </Paragraph>

        <Paragraph>
            <ul>
                <li>
                    <Text code>前端</Text>：<Link href="#">React</Link>+<Link href="#">Typescript</Link>+<Link href="#">webpack</Link>+<Link href="#">Redux</Link>+<Link href="#">Router-dom</Link>
                </li>
                <li>
                    <Text code>后端</Text>：<Link href="#">node.js</Link>+<Link href="#">koa</Link>
                </li>
                <li>
                    <Text code>数据库</Text>：<Link href="#">MySql</Link>+<Link href="#">TiDB</Link>
                </li>
            </ul>
        </Paragraph>

        <Paragraph>
            <blockquote>{blockContent}</blockquote>
            <pre>{blockContent}</pre>
        </Paragraph>

        <Paragraph style={{ float: 'right', marginTop: '15px' }}>
            <h4>  Github地址： <a href="https://github.com/codeshihaoran/shopping-store-admin"><GithubFilled style={{ fontSize: '22px' }} /></a></h4>
        </Paragraph>
    </Typography>
}
export default TypoGraphy