import { Logger } from '../utils/logger.js';
import { McpUnity } from '../unity/mcpUnity.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
/**
 * Creates and registers the Menu Item tool with the MCP server
 * This tool allows executing menu items in the Unity Editor
 *
 * @param server The MCP server instance to register with
 * @param mcpUnity The McpUnity instance to communicate with Unity
 * @param logger The logger instance for diagnostic information
 */
export declare function createMenuItemTool(server: McpServer, mcpUnity: McpUnity, logger: Logger): void;
